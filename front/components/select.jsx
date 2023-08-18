import React from "react";

export default function Select({name,options}) {
    return (
        <div className="input-group mb-3">
            <span className="input-label">{name}</span>
            <select
                className="form-select"
            >
                {options.map(option => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );

}