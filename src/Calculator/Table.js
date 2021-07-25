import React from 'react';

const tabel =(props)=>{
    return(
        <div>
              <table  height="400px" cellSpacing="20px" align="center" width="80%">
            {/* <th colSpan="7">{toprint}</th> */}
            <tr>
                <td className="lightgrey btn" onClick={()=>{props.onClickHandler("C")}}>DC</td>
                <td className="lightgrey btn" onClick={props.onDelete}>DEL</td>
                <td className="lightgrey btn" onClick={()=>{props.onClickHandler("%")}}>%</td>
                <td className="orange btn" onClick={()=>{props.onClickHandler("/")}}>/</td>
                <td className={[props.kgs, "btn"].join(" ")} onClick={()=>{props.conversions("kg")}}>kg</td>
                <td className={[props.gms, "btn"].join(" ")} onClick={()=>{props.conversions("gm")}}>gm</td>
                <td className={[props.mgs, "btn"].join(" ")} onClick={()=>{props.conversions("mg")}}>mg</td>
            </tr>
            <tr>
                <td className="lightGrey btn" onClick={()=>{props.onClickHandler("7")}}>7</td>
                <td className="lightGrey btn" onClick={()=>{props.onClickHandler("8")}}>8</td>
                <td className="lightGrey btn" onClick={()=>{props.onClickHandler("9")}}>9</td>
                <td className="orange btn" onClick={()=>{props.onClickHandler("*")}}>*</td>
                <td className={[props.kms, "btn"].join(" ")} onClick={()=>{props.conversions("km")}}>km</td>
                <td className={[props.meters, "btn"].join(" ")} onClick={()=>{props.conversions("m")}}>m</td>
                <td className={[props.cms, "btn"].join(" ")} onClick={()=>{props.conversions("cm")}}>cm</td>
            </tr>
            <tr>
                <td className="lightGrey btn"onClick={()=>{props.onClickHandler("4")}}>4</td>
                <td className="lightGrey btn" onClick={()=>{props.onClickHandler("5")}}>5</td>
                <td className="lightGrey btn" onClick={()=>{props.onClickHandler("6")}}>6</td>
                <td className="orange btn" onClick={()=>{props.onClickHandler("-")}}>-</td>
                <td className={[props.foots, "btn"].join(" ")} onClick={()=>{props.conversions("foot")}}>foot</td>
                <td className={[props.inchs, "btn"].join(" ")} onClick={()=>{props.conversions("inch")}}>inch</td>
                <td className={[props.mms, "btn"].join(" ")} onClick={()=>{props.conversions("mm")}}>mm</td>
            </tr>
            <tr>
                <td className="lightGrey btn" onClick={()=>{props.onClickHandler("1")}}>1</td>
                <td className="lightGrey btn" onClick={()=>{props.onClickHandler("2")}}>2</td>
                <td className="lightGrey btn" onClick={()=>{props.onClickHandler("3")}}>3</td>
                <td className="orange btn" onClick={()=>{props.onClickHandler("+")}}>+</td>
                <td className={[props.hrs, "btn"].join(" ")} onClick={()=>{props.conversions("hrs")}}>hrs</td>
                <td className={[props.mins, "btn"].join(" ")} onClick={()=>{props.conversions("mins")}}>mins</td>
                <td className={[props.secs, "btn"].join(" ")} onClick={()=>{props.conversions("secs")}}>secs</td>
            </tr>
            <tr>
                <td className="lightGrey btn" colSpan="2" onClick={()=>{props.onClickHandler("0")}}>0</td>
                <td className="btn" onClick={()=>{props.onClickHandler(".")}}>.</td>
                <td className="orange btn" onClick={()=>{props.onClickHandler("^")}}>^</td>
                <td className="grey btn" onClick={()=>{props.onClickHandler("(")}}>(</td>
                <td className="grey btn" onClick={()=>{props.onClickHandler(")")}}>)</td>
                <td className="green btn" onClick={props.onEvaluate}>=</td>
            </tr>
        </table>
        </div>
    );
}

export default tabel;