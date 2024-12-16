import React, { Component } from "react";
import TodoItem from "./TodoItem";
import { MSG_NO_ITEMS } from "../../assets/text/en_US";

export default class FilteredList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortedItems: [...props.items], // Initialize state with the items prop
        };
    }

    componentWillReceiveProps(nextProps) {
        // Update sortedItems when items prop changes
        if (nextProps.items !== this.props.items) {
            this.setState({ sortedItems: [...nextProps.items] });
        }
    }

    sort = (type) => {
        const { items } = this.props;
        let updatedSortedItems = [...items]; // Always work with a fresh copy of items

        if (type === "dueDate") {
            updatedSortedItems = updatedSortedItems.sort(
                (a, b) => new Date(a.dueDate) - new Date(b.dueDate)
            );
        } else if (type === "priority") {
            updatedSortedItems = updatedSortedItems.sort((a, b) => {
                const priorityOrder = { high: 1, medium: 2, low: 3 };
                return priorityOrder[a.priority] - priorityOrder[b.priority];
            });
        }

        this.setState({ sortedItems: updatedSortedItems }); // Update the state to trigger re-render
        console.log(updatedSortedItems);
    };

    render() {
        const { sortedItems } = this.state;
        const { changeStatus } = this.props;

        if (sortedItems.length === 0) {
            return <p className="alert alert-info">{MSG_NO_ITEMS}</p>;
        }

        return (
            <div>
                <div className="buttonsForSorting">
                    <button onClick={() => this.sort("dueDate")}>
                        Sort By Date
                    </button>
                    <button onClick={() => this.sort("priority")}>
                        Sort By Priority
                    </button>
                </div>
                <ul className="list-unstyled">
                    {sortedItems.map((item) => (
                        <TodoItem
                            key={item.id}
                            data={item}
                            changeStatus={changeStatus}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}
