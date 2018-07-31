/**
 * Implements the reservation form wizard and interaction with the server.
 * 
 * id (string): Identifier for the element
 */

'use strict';

import APIClient from '../api/api-client';
import isEmail from 'validator/lib/isEmail';
import React from 'react';

/**
 * Implements the RSVP form.
 */
class RSVPForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            guestInfo: {},

            submitStatus: null,
        };
    }

    render() {
        var self = this;

        const guestInfo = this.state.guestInfo;

        return (
            <div id={this.props.id} className="wizard-form">
                <p>Para darte el trato que nos gustaría te pedimos confirmes tu asistencia antes del 15 de diciembre de 2018. 
                Puedes hacerlo aquí, vía telefónica o confirmar al recibir la llamada de cualquiera de estos números 
                </p>
                <br />

                <p>Los campos marcados con * son obligatorios.</p>
                <br />

                {this.renderTextInput('nombre', 'Nombre*:', guestInfo)}
                {this.renderTextInput('telefono', 'Teléfono:', guestInfo)}
                <br />

                {this.renderRadioInput(
                    'asistir',
                    '¿Asistirás?*:',
                    [
                        { label: 'SI VOY A ATENDER', value: true },
                        { label: 'NO PODRÉ ACOMPAÑARLOS', value: false }
                    ],
                    guestInfo)
                }
                <br />

                {guestInfo.asistir === 'true'  &&
                    <div>
                        {this.renderNumberInput(
                            'pax',
                            '¿Cuantas personas te acompañaran?*',
                            guestInfo)}
                        <br />
                        {this.renderRadioInput(
                            'menu_especial',
                            '¿Necesitas un menú especial?*:',
                            [
                                { label: 'NO', value: false },
                                { label: 'SI (Disponible menus vegetariano y diabético, te llamaremos para confirmar el tipo y número)', value: true }
                            ],
                            guestInfo)}
                        <br />
                        <br />

                    </div>
                }
                <br />

                {this.state.submitStatus &&
                    <div className={this.state.submitStatus.isError ? 'alert-error' : 'alert-success'}>
                        <span className="alert-closebtn"
                            onClick={() => { self.state.submitStatus = null; self.setState(self.state); }}>&times;</span>
                        {this.state.submitStatus.message}
                    </div>
                }
                <br />

                <button onClick={this.submitRSVP.bind(this)}>Enviar</button>
            </div>
        );
    }

    /**
     * Validates that the form can be submitted and returns null on success or a string message with
     * the validation error otherwise.
     */
    validate() {
        function validateGuestDetail(info) {
            if (!guestInfo.pax || isNaN(guestInfo.pax) || guestInfo.pax < 0)
                return 'Utiliza un numero igual o mayor a 0 para tus acompañantes.';
            if (!info.menu_especial)
                return "Por favor elige si necesitas un menú especial.";
            return null;
        }

        const guestInfo = this.state.guestInfo;

        if (!guestInfo.nombre || guestInfo.nombre.trim().empty)
            return 'Escribe tu nombre por favor';

        if (!guestInfo.asistir)
            return '¿Nos acompañaras?';

        if (guestInfo.asistir === 'false')
            return null;

        const guestValidation = validateGuestDetail(guestInfo);
        if (guestValidation) {
            return guestValidation;
        }
    }

    /**
     * Renders a text input with a label. Gets its state and updates the specified @stateObj.
     */
    renderTextInput(name, label, stateObj) {
        const self = this;
        const value = stateObj[name];

        function onChange(event) {
            stateObj[name] = event.target.value;
            self.setState(self.state);
        }

        return (
            <div className="rsvp-section">
                <label>{label}</label>
                <input type="text"
                    name={name}
                    value={value}
                    onChange={onChange} />
            </div>
        );
    }
    renderNumberInput(name, label, stateObj) {
        const self = this;
        const value = stateObj[name];

        function onChange(event) {
            stateObj[name] = event.target.value;
            self.setState(self.state);
        }

        return (
            <div className="rsvp-section">
                <label>{label}</label>
                <input type="number"
                    name={name}
                    value={value}
                    onChange={onChange} 
                    min="0" max="15"/>
            </div>
        );
    }
    /**
     * Renders a text input with a label and the specified set of options. Gets its state and
     * updates the specified @stateObj.
     * 
     * The format of the options is an array of JSON objects with the following properties:
     *  label - Label of the option
     *  value - Value of the option to be set on the @stateObj
     */
    renderRadioInput(name, label, options, stateObj) {
        const self = this;
        const value = stateObj[name] === 'true';;

        function onChange(event) {
            stateObj[name] = event.target.value;
            self.setState(self.state);
        }
        
        return (
            <div className="rsvp-section">
                <label>{label}</label>
                {
                    options.map(function (option) {
                        return (
                            <div key={option.value}>
                                <input type="radio"
                                    value={option.value}
                                    checked={value === option.value}
                                    onChange={onChange} />
                                <label>{option.label}</label>
                            </div>
                        );
                    })
                }
            </div>
        );
    }

    /**
     * Retrieves the client for the web service API.
     */
    // getAPIClient() {
    //     return new APIClient(document.location.protocol + '//' + document.location.host + '/api/rsvp');
    // }

    /**
     * Takes the collected wizard input across all forms and submits it to the database.
     */
    submitRSVP() {
        const self = this;
        const state = this.state;

        if (this.validate()) {
            self.state.submitStatus = { isError: true, message: this.validate() };
            self.setState(self.state);
            return;
        }

        var guestInfo = Object.assign({}, state.guestInfo);
        guestInfo.createdAt = Date.now();
        console.log(guestInfo);
        var addDoc = database.collection('rsvp').add(guestInfo).then(ref => {
            console.log('Added document with ID: ', ref.id);
        });
        // var addDoc = db.collection('cities').add({
        //     name: 'Tokyo',
        //     country: 'Japan'
        // }).then(ref => {
        //     console.log('Added document with ID: ', ref.id);
        // });
        // TODO: This is a hack, find a way to properly construct the request
        // const willAttend = guestInfo.attendance === 'yes';
        // delete guestInfo['attendance'];      

        // this.getAPIClient().rsvp(guestInfo, willAttend, function (errorMsg, successMsg) {
        //     if (errorMsg) {
        //         self.state.submitStatus = { isError: true, message: errorMsg };
        //         self.setState(self.state);
        //     } else {
        //         self.state.submitStatus = {
        //             isError: false, message: 'Tu datos se enviaron correctamente. ¡Gracias!'
        //         };
        //         self.setState(self.state);
        //     }
        // });
    }
}

export default RSVPForm;
