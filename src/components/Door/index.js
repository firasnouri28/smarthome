import React from 'react'

const Door = () => {
    return (
        <div className='door'>
            <h3 style={{textAlign:'center'}}>Controle Porte</h3> 
            <table style={{margin:'auto',width: "50%"}}>
                <tr>
                    <td>
                        <h5>Ouvrir porte 1 </h5>
                    </td>
                    <td>
                        <label className="switch ">
                            <input type="checkbox" className="default" />
                            <span className="slider round" />
                        </label>
                    </td>
                </tr>
               
            </table>
        </div>
    )
}

export default Door;
