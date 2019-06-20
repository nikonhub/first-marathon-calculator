import React from 'react';

function render60options() {
    const optionList = [];

    for (let i = 0; i < 60; i++) {
        optionList.push(<option value={i}>{i < 10 ? `0${i}` : i}</option>)
    }

    return optionList;
}

const TimeForm = () => {
    return (
        <form className="m-2">
            <div class="form-row">
                <div className="form-group col-md-3">
                    <p>10K time:</p>
                </div>
                <div className="form-group col-md-2">
                    <select className="form-control" id="exampleFormControlSelect1">
                        <option value="0">H</option>
                        {render60options()}
                    </select>
                </div>

                <div className="form-group col-md-2">
                    <select className="form-control" id="exampleFormControlSelect1">
                        <option value="0">M</option>
                        {render60options()}
                    </select>
                </div>

                <div className="form-group col-md-2">
                    <select className="form-control" id="exampleFormControlSelect1">
                        <option value="0">S</option>
                        {render60options()}
                    </select>
                </div>

                <div className="form-group col-md-3">
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-secondary">Km</button>
                        <button type="button" class="btn btn-secondary">Mi</button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default TimeForm;