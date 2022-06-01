function sortTable(n) {
  let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("table");
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc";
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
        
    // n - це номер колонки починаючи з нуля. 
    // сортуем дату
    if (n === 5) {
      if (dir == "asc") {
        if (dateToTimestamp(x.innerText) > dateToTimestamp(y.innerText)) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (dateToTimestamp(x.innerText) < dateToTimestamp(y.innerText)) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } 
    }


      /* Check if the two rows should switch place,
      based on the direction, asc or desc: */
    else if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } 
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Each time a switch is done, increase this count by 1:
      switchcount ++;
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}


// ! переводим дату у мілісекунди
function dateToTimestamp(date) {
    const dateArr = date.split(".");
    const newDate = new Date( dateArr[2], dateArr[1] - 1, dateArr[0]);
    return newDate.getTime();
}


// var myDate = "26-02-2012";
// myDate = myDate.split("-");
// console.log(myDate);
// !! віднімають 1 від місяців тому що місяці відображаються в масиві від 0 до 11.
// var newDate = new Date( myDate[2], myDate[1] - 1, myDate[0]);
// console.log(newDate.getTime());


const allTh = document.querySelectorAll('th');
allTh.forEach((el, i) => {
    el.addEventListener('click', () => sortTable(i));
});