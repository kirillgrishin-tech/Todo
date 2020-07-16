import React, {useContext} from 'react';
import PropTypes from  'prop-types';
import Context from '../context';

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom:'.5rem',
        background: 'rgb(150,140,140)'
    },
    input: {
        marginRight: '1rem',
        width: '1.1rem',
        height:'1.1rem'
    }
}

function Listy({text, index, onChange}){
    const { removeList }= useContext(Context);
    const classes = [];
    const [about,setAbout] = React.useState(false);
    if (text.complete){
        classes.push('done')
    }

    return (
        <li style={styles.li} onClick={()=> !text.complete && setAbout(!about)}>
            <span className ={classes.join(' ')}>
                <input type ='checkbox' checked= {text.complete} style={styles.input} onChange={()=>{onChange(text.id_do); setAbout(false);}}/>
                <strong>{index+1+'  '}</strong>
                <a>{text.dodo}</a>
                {about && !text.complete && <p>{text.about}</p>}
            </span>
            <button className='rm' onClick={removeList.bind(null,text.id_do)}>&times;</button>
        </li>
    )
}

Listy.propTypes = {
    text: PropTypes.object,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}
export default Listy;