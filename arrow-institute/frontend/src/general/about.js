import React from "react";
import Accordion from 'react-bootstrap/Accordion';


const About = () => {
    return (
        <div className="container">
            <div className="row pt-5">
                <h1 className="display-5 text-center text-primary" >React and concepts</h1>
                <p>
                    React.js is a popular JavaScript library for building user interfaces, and it introduces several key concepts that developers should be familiar with. Here are some fundamental concepts in React.js:
                </p>
            </div>
            <div className="row pt-4">
                <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>01 Components</Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li>
                                    React applications are built using components, which are reusable, self-contained building blocks for UI elements.
                                </li>
                                <li>
                                    Components can be either functional (stateless) or class-based (stateful).
                                </li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>02 JSX(Javascript XML)</Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li>
                                JSX is a syntax extension for JavaScript recommended by React for describing what the UI should look like.
                                </li>
                                <li>
                                It allows you to write HTML-like code in your JavaScript files.
                                </li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
              

                <Accordion.Item eventKey="2">
                        <Accordion.Header>03 Props (Properties)</Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li>
                                Props are used to pass data from a parent component to a child component.
                                </li>
                                <li>
                                Props are immutable and are used to make components more dynamic and customizable.
                                </li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                        <Accordion.Header>04 State</Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li>
                                State is used to manage the internal data of a component.
                                </li>
                                <li>
                                State can be changed, and when it changes, React re-renders the component to reflect the updated state.
                                </li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4">
                        <Accordion.Header>05 Event Handling</Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li>
                                React handles events using synthetic events that are similar to standard DOM events.
                                </li>
                                <li>
                                Event handlers are specified using camelCase in JSX, like onClick or onChange.

                                </li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="5">
                        <Accordion.Header>06 Hooks</Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li>
                                Introduced in React 16.8, hooks are functions that let you use state and other React features in functional components.
                                </li>
                                <li>
                                Commonly used hooks include<strong>useState, useEffect, useContext, </strong> etc.

                                </li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="6">
                        <Accordion.Header>07 Lists and Keys</Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li>
                                React provides a convenient way to render lists of data and assigns a unique key to each item to optimize rendering.
                                </li>
                               
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="7">
                        <Accordion.Header>08 Forms in React</Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li>
                                React handles form elements differently from traditional HTML. It maintains the form data in the component's state and uses controlled components.
                                </li>
                               
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="8">
                        <Accordion.Header>09 Context API</Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li>
                                The Context API provides a way to pass data through the component tree without having to pass props manually at every level.
                                </li>
                               
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="9">
                        <Accordion.Header>10 Refs</Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li>
                                Refs allow access to the underlying DOM nodes or React elements created in the render method.
                                </li>
                               
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="10">
                        <Accordion.Header>11 Router</Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li>
                                React Router is a popular library for handling navigation in React applications. It allows you to create a single-page application with navigation.
                                </li>
                               
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                    </Accordion>
               
            </div>
        </div>
    );

}
export default About;