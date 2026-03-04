import { useState } from 'react'
import './FilterSection.css'

function FilterSection({ label, count, defaultOpen = false, children }) {
    const [open, setOpen] = useState(defaultOpen)

    return (
        <div className="FilterSection">
            <button
                className="filtersection-header"
                onClick={() => setOpen(prev => !prev)}
                type="button"
            >
                <span className="filtersection-label">{label}</span>
                {count > 0 && (
                    <span className="filtersection-count">{count}</span>
                )}
                <span className="filtersection-arrow">{open ? "▲" : "▼"}</span>
            </button>
            {open && (
                <div className="filtersection-body">
                    {children}
                </div>
            )}
        </div>
    )
}

export default FilterSection