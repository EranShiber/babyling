import React from "react";

const Tasks = (props) => (

  <div className="container">
    {console.log(props.state.weeks)}
  <ul className="list-group main-ul">
    <li className="list-group-item">
    <h4>
    {props.state.weeks > 6 && props.state.weeks < 10 ? (<span style={{float: 'right'}} class="badge badge-pill badge-warning">אתם כאן</span>) :  ('')}
      שבוע 6-10
    </h4>
      <p>
  פתיחת כרטיס מעקב <br />
 משקל, גובה, ל"ד <br />
 בדיקת רופא<br />
 ייעוץ גנטי <br />
 טיפול בברזל וח' פולית עד הלידה <br />
 בדיקות מעבדה: <br />
 ספירת דם 
 סוג דם ובדיקת קומבס בלתי ישיר <br />
 VDRL <br />
 טיי-זקס <br />
 שתן לכללית ותרבית<br />

    </p>
    </li>
    <li className="list-group-item">
    
    <h4>
    {props.state.weeks > 11 && props.state.weeks < 13 ? (<span style={{float: 'right'}} class="badge badge-pill badge-warning">אתם כאן</span>) :  ('')}
    שבוע 11-13
      </h4>
      <p>
      שקיפות עורפית ובדיקות דם לזיהוי סיכון גבוה לתסמונת דאון.
      </p>
    </li >
    <li className="list-group-item">
    <h4>
    {props.state.weeks > 14 && props.state.weeks < 16 ? (<span style={{float: 'right'}} class="badge badge-pill badge-warning">אתם כאן</span>) :  ('')}
    שבוע 14-16
        </h4>
      <p>
      סקירת מערכות וגינלית

      </p>
    </li>
    <li className="list-group-item">
    <h4>
    {props.state.weeks > 18 && props.state.weeks < 20 ? (<span style={{float: 'right'}} class="badge badge-pill badge-warning">אתם כאן</span>) :  ('')}
    שבוע 18-20
        </h4>
      <p>
      בדיקת דם לנוגדני RH
    
      </p>
    </li>
    <li className="list-group-item">
    <h4>
    {props.state.weeks > 20 && props.state.weeks < 24 ? (<span style={{float: 'right'}} class="badge badge-pill badge-warning">אתם כאן</span>) :  ('')}

    שבוע 20-24
      </h4>
      <p>
      סקירת מערכות בטנית
      </p>
    </li>
    <li className="list-group-item">
    <h4>
    {props.state.weeks > 24 && props.state.weeks < 28 ? (<span style={{float: 'right'}} class="badge badge-pill badge-warning">אתם כאן</span>) :  ('')}
    שבוע 24-28
        </h4>
      <p>
      העמסת סוכר 50 גר'

      </p>
    </li>
    <li className="list-group-item">
    <h4>
    {props.state.weeks > 27 && props.state.weeks < 28 ? (<span style={{float: 'right'}} class="badge badge-pill badge-warning">אתם כאן</span>) :  ('')}
    שבוע 27-28
    </h4>
      <p>
      בדיקת דם לנוגדני RH ומתן נוגדנים לפי הצורך. חיסון שעלת.
      </p>
    </li>
    <li className="list-group-item">
    <h4>
    {props.state.weeks > 30 && props.state.weeks < 32 ? (<span style={{float: 'right'}} class="badge badge-pill badge-warning">אתם כאן</span>) :  ('')}
    שבוע 30-32
    </h4>
      <p>
      בדיקת רופא ואןלטרסאונד למעקב גדילה וסקירת התפתחות איברים 
  שונים 
      </p>
    </li>
    <li className="list-group-item">
    <h4>
    {props.state.weeks > 35 && props.state.weeks < 38 ? (<span style={{float: 'right'}} class="badge badge-pill badge-warning">אתם כאן</span>) :  ('')}
    שבוע 35-38	
        </h4>
      <p>
      בדיקת רופא וספירת דם
      </p>
    </li>
    <li className="list-group-item">
    <h4>
    {props.state.weeks > 40 && props.state.weeks < 41 ? (<span style={{float: 'right'}} class="badge badge-pill badge-warning">אתם כאן</span>) :  ('')}
    שבוע 40-41
        </h4>
      <p>
      ביקורת בחדר לידה
      </p>
    </li>
  </ul>



  </div>
);

export default Tasks;
