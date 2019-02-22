import React from "react"
import styled from 'styled-components'

export default class Inputs extends React.Component {

    changeName = event => {
        let name = event.target.value
            .replace(/[^a-zA-Z\s]|/g, "")
            .replace("  ", " ")
            .trimLeft()
            .toUpperCase()
            .slice(0, 30)
        this.setState({
            name
        })
        event.target.value = name
        this.props.changeName(name.length === 0 ? "CARDHOLDER" : name)
    }

    normalizeCardNumber = cardNumber =>
        cardNumber.replace(/\D/g, "").slice(0, 16);
    changeCardNumber = event => {
        event.target.value = this.normalizeCardNumber(event.target.value)
        let card = event.target.value
        card = card.concat("•".repeat(16 - card.length))
        card = card.match(/.{1,4}/g).join("   ")
        this.props.changeCardNumber(card)
    };

    dateVerification = date => {
        if (date.length === 0)
            return ""
        if (date.length < 3) {      // le mois doit etre compris entre 1 et 12
            if (Number(date[0]) > 1)
                return ""
            else {
                return (Number(date) > 12 || Number(date) < 1) ? date[0] : date
            }
        }
        if (date.length > 3) {  // l'année de l'expiration doit etre superieur à l'année de courante
            if (Number("20" + date.substr(2, 2)) <= new Date().getFullYear())
                return date.substr(0, 2)
        }
        return date
    }
    changeValidThru = event => {
        event.target.value = event.target.value.replace(/\D/g, "").slice(0, 4)
        event.target.value = this.dateVerification(event.target.value)
        let arr = event.target.value.match(/.{1,2}/g);
        arr === null ? arr = "" : arr = arr.join("/");
        event.target.value = arr;
        this.props.changeValidThru(arr)
    }

    render() {
        return (
            <InputsStyle>
                <div>
                    <input placeholder={"Nom"} onChange={this.changeName} />
                    <input placeholder={"Numero Carte"} onChange={this.changeCardNumber} />
                    <input placeholder={"Validité"} onChange={this.changeValidThru} />
                </div>
            </InputsStyle>
        )
    }

}

const InputsStyle = styled.div`
input{
    margin: 30px 0;
    display:block;
    font-size:35px;
    width:
}
`