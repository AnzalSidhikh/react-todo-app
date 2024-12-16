import React, { Component } from 'react';

class CheckBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.checked,
            originalState: this.props.checked
        };
    }

    handleChange(e) {
        const { checked } = e.target;
        if (checked) {
            const confirmation = window.confirm('Are you sure you want to mark this task as completed?');
            if (confirmation) {
                this.setState({ checked });
                this.props.onChange(checked);
            } else {
                this.setState({ checked: this.state.originalState });
            }
        } else {
            this.setState({ checked });
            this.props.onChange(checked);
        }
    }

    render() {
        return (
            <input
                type="checkbox"
                checked={this.state.checked}
                onChange={this.handleChange.bind(this)}
            />
        );
    }
}

export default CheckBox;
