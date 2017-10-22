import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { createEvent } from '../../store/actions/events'

class CreateEvent extends Component {
    constructor(props) {
        super(props);

        this.onNameChange = this.onNameChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
        this.goBack = this.goBack.bind(this);

        this.state = {
            event : {
                name : ''
            }
        };
    }

    onNameChange(e){
        const event = this.state.event;
        event.name = e.target.value;
        this.setState({
            event: event
        });
    }

    onClickSave(){
        console.log(`This is the value ${this.state.event.name}`);
        this.props.createEvent(this.state.event);
    }

    goBack(){
        browserHistory.push('/')
    }

    render() {
        return (
            <div>
                {this.props.events.length}
                <input type="text" onChange={this.onNameChange} value={this.state.event.name}/>
                <input type="submit" onClick={this.onClickSave} />

                <h1 onClick={this.goBack}>Go Back</h1>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        events: state.events
    }
};

const mapDispatchToProps =  {
    createEvent: createEvent,
};


export default connect( mapStateToProps, mapDispatchToProps )(CreateEvent);
