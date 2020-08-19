import React, { Fragment } from "react";
import _ from "lodash";

const Calculator = (props) => {
    const {value1, value2, result, error, inputHandler, add, sub, mul, div} = props;
    return (
        <Fragment>
            <h1>THIS IS CALCULATOR</h1>
            <hr/>
            <h3>Result : {!!result[0] && result[0].result}</h3>
            <br/>
            {!!error && <label className="alert alert-danger">Value must be Integer Only</label>}
            <br/>
            <input type="text" name="value1" value={value1} onChange={inputHandler}/>
            <br/>
            <input type="text" name="value2" value={value2} onChange={inputHandler}/>
            <br/>
            <button onClick={add} disabled={error}>+</button>
            <button onClick={sub} disabled={error}>-</button>
            <button onClick={mul} disabled={error}>x</button>
            <button onClick={div} disabled={error}>/</button>
            <hr />
            { !!result.length && 
                <ul><h4>Previous Calculations</h4>
                    {_.map(result, (e, idx) => {
                        return (
                            <li key={idx}>
                                {e.value1}
                                {e.method}
                                {e.value2}
                                =
                                {e.result}
                                <hr/>
                            </li>
                        )
                    })}
                </ul>
            }

        </Fragment>
    );
};


export default React.memo(Calculator);