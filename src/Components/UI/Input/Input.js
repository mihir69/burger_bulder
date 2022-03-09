import React from 'react';
import classes from './Input.module.css'
const Input = (props) => {
    let inputElement = null;
    let inputClass = [classes.InputElement];
    if(props.Invalid && props.Needvalidation && props.checkTouch)
    inputClass.push(classes.Invalid);
    switch (props.elementType) {
        case ('input'): {
            inputElement =
                <input className={inputClass.join(' ')}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed} >
                </input>
            break;
        }
        case ('textarea'): {
            inputElement =
                <textarea className={inputClass.join(' ')}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}>
                </textarea>
            break;
        }
        case ('select'): {
            inputElement =
                (
                    <select className={inputClass.join(' ')}
                        value={props.value}
                        onChange={props.changed}>
                        {props.elementConfig.options.map(option =>
                            <option
                                key={option.value}>{option.displayValue}
                            </option>
                        )}
                    </select>
                )
            break;
        }
        default:
            inputElement =
                <input className={inputClass.join(' ')}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}>
                </input>
    }
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>

    );
}
export default Input;



