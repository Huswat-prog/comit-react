const currentHour = prompt('enter the current hour (out of 0-23)');

if (currentHour < 0 || currentHour > 23 ) {
    alert( 'Your input is incorrect' );
  } else if (currentHour < 8 || currentHour >=  18 ){
    alert( 'outside of office hours' );
  } else {
    alert( 'we are open' );
  }