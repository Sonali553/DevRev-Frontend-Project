let TableHeight = document.querySelector(".table__body");
  console.log(TableHeight.offsetHeight);
  console.log(TableHeight.scrollHeight);
  console.log(TableHeight.scrollTop);
  let hiddenRows = document.querySelectorAll(".hiddenR");
  console.log(hiddenRows);
  TableHeight.onscroll = function() {
      
      if ((TableHeight.scrollTop+ TableHeight.scrollHeight) >= TableHeight.offsetHeight) {
        let hiddenRows = document.querySelectorAll(".hiddenR");
        for (let i = 0; i < hiddenRows.length; i++) {
          hiddenRows[i].style.display = 'table-row';
        }
      }
    };

  