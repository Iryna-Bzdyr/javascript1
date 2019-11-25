let getID = y => document.getElementById(y);
let getSel = x => document.querySelector(x);
let mainBox = getID('box1');
let editButton = getID('editBtn');
let styleButton = getID('styleBtn');
let addButton = getID('addBtn');
let saveButton = getID('saveBtn');
let text = getID('box1').innerHTML;
let styleForma = document.forms['formaStyle'];
let tableOrList = document.forms['tableProperty'];
let tableForm = document.forms['tableForm'];
let listForm = document.forms['listForm'];
let eventCounter=0


editButton.addEventListener('click', function () {
    getID('textAreaDiv').style.display = 'block';
    getID('style').style.display = 'none';
    getID('textarea').innerHTML = mainBox.innerHTML
}
)
styleButton.addEventListener('click', function () {
    getID('textAreaDiv').style.display = 'none';
    getID('style').style.display = 'block';
}
)
saveButton.addEventListener('click', function () {
    mainBox.innerHTML = (getID('textarea').value)

})

//Change font size by clicking on radio button
for (let i = 0; i < styleForma.chooseFontSize.length; i++) {
    styleForma.chooseFontSize[i].addEventListener('click', function () {
        for (let i = 0; i < mainBox.children.length; i++) {
            mainBox.children[i].style.fontSize = this.value + 'px'
        }
    }
    )
}
//Change font Family style by changing select options
for (let i = 0; i < styleForma.fontStyle.length; i++) {
    styleForma.fontStyle.addEventListener('change', function () {
        for (let i = 0; i < mainBox.children.length; i++) {
            mainBox.children[i].style.fontFamily = this.value
        }
    }
    )
}
//function for change mainBox elements color
styleForma.selectTextColor.addEventListener('click', function () {
   eventCounter++
    console.log(eventCounter)
    if (eventCounter % 2 !== 0) {
        getSel('.colorFontStyle').style.display = 'grid';
        for (let i = 0; i < getSel('.colorFontStyle').children.length; i++) {
            getSel('.colorFontStyle').children[i].addEventListener('click', function () {
                for (let i = 0; i < mainBox.children.length; i++) {
                    mainBox.children[i].style.color = this.classList[0];
                    console.log(this.classList)
                }
            })
        }
    }
    if (eventCounter % 2 == 0) {
        getSel('.colorFontStyle').style.display = 'none';
    }
})  
//function for change mainBox backgroundcolor
styleForma.selectBackgroundColor.addEventListener('click', function () {
    eventCounter++
     console.log(eventCounter)
     if (eventCounter % 2 !== 0) {
         getSel('.colorForMainbox').style.display = 'grid';
         for (let i = 0; i < getSel('.colorForMainbox').children.length; i++) {
             getSel('.colorForMainbox').children[i].addEventListener('click', function () {
                mainBox.style.backgroundColor=this.classList[0];
             })
         }
     }
     if (eventCounter % 2 == 0) {
         getSel('.colorForMainbox').style.display = 'none';
     }
 })  

// Change font style by clicking on check box
styleForma.cursive.addEventListener('click', function () {
    if (styleForma.cursive.checked == true) {
        for (let i = 0; i < mainBox.children.length; i++) {
            mainBox.children[i].style.fontStyle = 'oblique'
        }
    }
    if (styleForma.cursive.checked !== true) {
        for (let i = 0; i < mainBox.children.length; i++) {
            mainBox.children[i].style.fontStyle = 'normal'
        }
    }
})
// Change font weight by clicking on check box
styleForma.bold.addEventListener('click', function () {
    if (styleForma.bold.checked == true) {
        for (let i = 0; i < mainBox.children.length; i++) {
            mainBox.children[i].style.fontWeight = 'bold'
        }
    }
    if (styleForma.bold.checked !== true) {
        for (let i = 0; i < mainBox.children.length; i++) {
            mainBox.children[i].style.fontWeight = 'normal'
           
        }
    }
})

addButton.addEventListener('click', function () {
    getID('startScreen').style.display = 'none';
    getID('additionalScreen').style.display = 'block';
    getID('forList').style.display = 'none';
    getID('forTable').style.display = 'none';
})
// Make a table
for (let i = 0; i < tableOrList.tabelList.length; i++) {
    tableOrList.tabelList[i].addEventListener('click', function () {
        if (tableOrList.tabelList[i].value == 'table') {
            getID('forList').style.display = 'none';
            getID('forTable').style.display = 'block';
            tableForm.creatTable.addEventListener('click', function () {
                let table = '';
                let rows = tableForm.rowCount.value;
                let columns = tableForm.columnCount.value;
                let cellWidth = tableForm.tdWidth.value;
                let cellHeight = tableForm.tdHeight.value;
                let borderWidth = tableForm.borderWidth.value;
                let typeOfBorder = borderType.options[borderType.selectedIndex].value;
                let colorOfBorder = borderColor.options[borderColor.selectedIndex].value;
                let cellStyle = '<td style=\'width:' + cellWidth + 'px; height:' + cellHeight + 'px; border:' + borderWidth + 'px' + ' ' + typeOfBorder + ' ' + colorOfBorder + '\'>'
                console.log(cellStyle)
                for (let r = 0; r < rows; r++) {
                    table += '<tr>';
                    for (let c = 0; c < columns; c++) {
                        table += cellStyle + 'TD' + '</td>';
                    }
                    table += '</tr>'
                }
                getID('textarea').innerHTML = mainBox.innerHTML + ('<table>' + table + '</table>')
                getID('startScreen').style.display = 'block';
                getID('additionalScreen').style.display = 'none';

            })
        }
    })

}
//Make a list
for (let i = 0; i < tableOrList.tabelList.length; i++) {
    tableOrList.tabelList[i].addEventListener('click', function () {
        if (tableOrList.tabelList[i].value == 'list') {
            getID('forList').style.display = 'block';
            getID('forTable').style.display = 'none';

            listForm.creatList.addEventListener('click', function () {
                let list = '';
                let liCount = listForm.countOfList.value
                let typeOfMarks = marksType.options[marksType.selectedIndex].value
                liStyle = '<li type=\'' + typeOfMarks + '\'>'
                for (let li = 0; li < liCount; li++) {
                    list += liStyle + 'Item' + li + '</li>'
                }
                getID('textarea').innerHTML = mainBox.innerHTML + ('<ul>' + list + '</ul>')
                getID('startScreen').style.display = 'block';
                getID('additionalScreen').style.display = 'none';

            })
        }
    })
}




