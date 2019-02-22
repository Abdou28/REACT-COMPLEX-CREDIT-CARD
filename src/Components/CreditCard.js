import React from "react"
import styled from 'styled-components'
import chip from "../res/chip.png"
import logo from "../res/visa.jpg"
import backgroundImage from "../res/background.jpg"
export default class CreditCard extends React.Component {

    render() {
        return (
            <CreditCardStyle image={backgroundImage}>
                <div className="main">
                    <h1 className="title">CREDIT CARD</h1>
                    <img className="chip" src={chip} alt="puce" />
                    <div className="container">
                        <img className="logo" src={logo} alt="visa" />
                        <input disabled className="card-number" value={this.props.card} />
                        <div className="container-valid">
                            <div className="agency"><p>5422</p></div>
                            <div className="valid-thru-div">
                                <div className="valid-thru-text"><p>VALID<br />THRU</p></div>
                                <div className="triangle"><span>&#9658;</span></div>
                                <div className="date"><p>{this.props.validity}</p></div>
                            </div>
                        </div>
                        <div className="card-holder"><p>{this.props.name}</p></div>
                    </div>
                </div>
            </CreditCardStyle>
        )
    }
}

const CreditCardStyle = styled.div`
.main{
    background-image:url("${props => props.image}");
    border-radius: 30px;
    height: 312px;
    width:500px;
}
.title{
    margin 0;
    padding 25px 40px 20px;
    text-align: right;
    color: white;
}
.chip{
    margin-left:40px;
    height: 60px;
    width: 80px;
    border-radius: 15px;
}
.logo{
    height: 90px;
    width: 70px;
    float:right;
    margin-right:40px;
    margin-top:40px;
}
.card-number{
    width:320px;
    background: gold;
    opacity:0.5;
    font-size : 26px;
    font-weight:bold;
    border:0;
    text-align:center;
    margin-left:20px;
    margin-top: 25px;
}
.container-valid{
    width:320px;
    margin-left:20px;
    display:flex;
    justify-content:space-between;
}
.agency{
    width:50%;
    font-size:22px;
    color:white;
    font-weight:bold;
}

.triangle{
    display:flex;
    align-items:center;
    font-size:20px;
    margin:7px 0 0;
}

.valid-thru-div{
    width:50%;
    display:flex;
    justify-content:flex-end;
}

.valid-thru-text{
    font-size:10px;
    line-height:10px;
    display:flex;
    align-items:center;
}

.date{
    font-size:20px;
    font-weight:bold;
    width:60px;;
}

.card-holder{
    max-width:320px;
    margin-left:20px;
    font-size:20px;
    font-weight:bold;
    color:white;
    text-overflow: ellipsis;
    word-wrap: break-word;
}

p{
    margin:7px 0 0;
}

`