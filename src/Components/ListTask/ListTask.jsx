import React, { useState, useEffect } from "react";
import Task from "../Task/Task";
import "./ListTask.css";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

function ListTask() {
    const todos = useSelector((state) => state.todosReducer.todos);
    const [filter, setfilter] = useState(todos);
    useEffect(() => {
        setfilter(todos);
    }, [todos]);
    const handlesubmit = () => {
        setfilter(todos.filter((e) => e.isDone === true));
    };
    const handlesubmit2 = () => {
        setfilter(todos.filter((e) => e.isDone === false));
    };
    const hanlesubmit3 = () => {
        setfilter(todos);
    };

    return (
        <div className="listTask">
            <div className="filter_btns" style={{ marginBottom: "25px" }}>
                <Button variant="outline-success" onClick={handlesubmit}>
                    Show Done
                </Button>
                <Button variant="outline-danger" onClick={handlesubmit2}>
                    {" "}
                    Show Not Done
                </Button>
                <Button variant="info" onClick={hanlesubmit3}>
                    Remove All Filters
                </Button>
            </div>
            {filter.map((task, index) => (
                <Task toDo_task={task} key={index} index={index} />
            ))}
        </div>
    );
}

export default ListTask;
