import './container.css';

export default function Container(props) {
    return (
        <div id="container">
            {props.children}
        </div>
    )
};