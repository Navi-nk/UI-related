/** Date validation plug-in created by NAVI
** Contains two methods
** 1. DateValidation - validates date in the format : dd-mm-yyy 
** param - input : date string
** param - output : bool value
**
** 2. validate_date_range - validates from and to date in the format : dd-mm-yyyy
** param - input : from date string 
** param - input : to date string
** param - output : bool value
**
 **/

function DateValidation(dt){

var dtstring=dt;
var dtarray=dtstring.split("-");
var v_day_temp=dtarray[0];
var v_month_temp=dtarray[1];
var v_year_temp=dtarray[2];
var val_month=0;
var val_date=0;
var leap_flag=0;
var feb_flag=0;
var month_flag=0;
var date_flag=0;
var final_flag=0;

if (v_day_temp === undefined || v_month_temp === undefined || v_year_temp === undefined || dtarray.length != 3)
{
	return final_flag;
}

var v_month=v_month_temp.replace(/^0+/g,'');
var v_day=v_day_temp.replace(/^0+/g,'');
var v_year=v_year_temp.replace(/^0+/g,'');
    
switch(v_month){
    case "1" : 
    case "2" :
    case "3" :
    case "4" :
    case "5" :
    case "6" :
    case "7" :
    case "8" :
    case "9" :
    case "10" :
    case "11" :
    case "12" :
        val_month=1;
        break;
    default:
        val_month=0;
        break;
    }
    
var v_year_len=v_year.length;
var v_year_temp=v_year.replace(/\D/g,'');
var v_yeartemp_len=v_year_temp.length;

if( (v_yeartemp_len != v_year_len) || (v_year_len != 4) || (Number(v_year) < 1900) )
{
    val_month=0;
}
    
if( val_month == 1 )
{
    if(v_month == "2")
    {
        var leap_test1=Number(v_year) % 400;
        var leap_test2=Number(v_year) % 100;
        var leap_test3=Number(v_year) % 4;
        feb_flag=1;
        if((leap_test1 == 0) || (leap_test2 == 0) || (leap_test3 == 0))
        {
            leap_flag=1;
        }
    }
    else
    {
        switch(v_month){
    case "1" : 
    case "3" :
    case "5" :
    case "7" :
    case "8" :
    case "10" :
    case "12" :
        month_flag=1;
        break;
    default:
        month_flag=0;
        break;
            }        
      }
    date_flag=1;
}

if( date_flag == 1 )
{
    if( Number(v_day) > 0 && Number(v_day) < 32)
    {
        if( leap_flag == 1 )
        {
            if( Number(v_day) > 0 && Number(v_day) < 30 )
            {
                final_flag=1;
            }
        }
        else if( leap_flag == 0 && feb_flag == 1 )
        {
            if( Number(v_day) > 0 && Number(v_day) < 29 )
            {
                final_flag=1;
            }
        }
        else
        {
            if( month_flag == 0 )
            {
                if( Number(v_day) > 0 && Number(v_day) < 31 )
                {
                    final_flag=1;
                }
            }
            else if( month_flag == 1 )
            {
                final_flag=1;
            }
        }
    }
}
    return final_flag;
}

function validate_date_range(from_dt,to_dt){
    var final_flag=0;
    
    var dtarray=from_dt.split("-");
    var v_day_temp=dtarray[0];
    var v_month_temp=dtarray[1];
    var v_year_temp=dtarray[2];
    
    var dtarray1=to_dt.split("-");
    var v_day_temp1=dtarray1[0];
    var v_month_temp1=dtarray1[1];
    var v_year_temp1=dtarray1[2];
    
    var v_month=v_month_temp.replace(/^0+/g,'');
    var v_day=v_day_temp.replace(/^0+/g,'');
    var v_year=v_year_temp.replace(/^0+/g,'');
    
    var v_month1=v_month_temp1.replace(/^0+/g,'');
    var v_day1=v_day_temp1.replace(/^0+/g,'');
    var v_year1=v_year_temp1.replace(/^0+/g,'');
    
    if( Number(v_year1) >= Number(v_year) )
    {
        if( Number(v_year1) == Number(v_year) )
        {
            if( Number(v_month1) >= Number(v_month) ) 
            {
                if( Number(v_month1) == Number(v_month) )
                {
                    if( Number(v_day1) >= Number(v_day) )
                    {
                        final_flag=1;
                    }
                }
                else
                {
                    final_flag=1;
                }
            }
        }
        else
        {
            final_flag=1;
        }
    }
    return final_flag;
}
