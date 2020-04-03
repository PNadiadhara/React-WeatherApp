import React from 'react'

function ToggleSwitch() {
    return (
        <div>
            <label class="switch">
                <input class="switch-input" type="checkbox" />
                <span class="switch-label" data-on="On" data-off="Off"></span>
                <span class="switch-handle"></span>
            </label>
        </div>
    )
}

export default ToggleSwitch