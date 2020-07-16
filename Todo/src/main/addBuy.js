import React from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';

function AddBuying({onCreate}){
    const [vis,setVis] = React.useState(false);
    const [value,setValue] = React.useState('');
    const [ab,setAb] = React.useState('');
    
    function SubmitHandler(value,about){
        setVis(false);
        if (value.trim()) {
            onCreate(value,about);
            setValue('');
            setAb('');
        }
    }
    return(
    <>
        {!vis && <button className="btn" type='submit' onClick ={()=>setVis(true)}>Добавить задачу</button>}
        {vis && <Modal value={value} about={ab} setPar={SubmitHandler} setVal={setValue} setAbout={setAb}/>}
    </>
    )
}

AddBuying.propTypes = {
    onCreate: PropTypes.func.isRequired
}
export default AddBuying;