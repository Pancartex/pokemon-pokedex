import React from "react";

function DetailedBigBox(props) {
  return (
    <div className="detailed-box-bg">
      <div className="detailed-box-header">
        <div>
          {props.boxIcon}
          {props.boxTitle}
        </div>
        {props.badge && <div>{props.badge}</div>}
      </div>
      <section>{props.children}</section>
    </div>
  );
}

export default DetailedBigBox;
