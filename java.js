let yas = +prompt('Yaşıvı de görey');

if (yas < 14) {document.getElementById('yas').innerHTML = 'Ged oyuncaqinnan oyna';}

else if (yas < 18) {document.getElementById('yas').innerHTML = 'Yeni yetirsen ay qaqa';}

else if (yas < 36) {document.getElementById('yas').innerHTML = 'Qocalırığe';}

else if (yas < 46) {document.getElementById('yas').innerHTML = 'E belim tutulube';}

else if (yas < 66) {document.getElementById('yas').innerHTML = 'Bir ayağın çukurdadı';}

else if (yas < 100) {document.getElementById('yas').innerHTML = 'Ölürsene ay dede';}

else {document.getElementById('yas').innerHTML = 'A kişi ölmüsen basdıranın yoxdu';}