function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function showSection(section) {
    // Hide all sections
    document.getElementById("projectSection").style.display = "none";
    document.getElementById("projectInfoSection").style.display = "none";
    document.getElementById("manageAccessSection").style.display = "none";

    // Show the selected section
    document.getElementById(section + "Section").style.display = "block";
}

function addRow(section) {
    var sectionDiv = document.getElementById(section + 'Rows');
    var newRow = document.createElement('tr');

    if (section === 'project') {
        // Add row for the project section
        newRow.innerHTML = `
            <td class="border px-4 py-2"><input type="text" class="form-control w-full" placeholder="Enter Work Order No"></td>
            <td class="border px-4 py-2"><input type="text" class="form-control w-full" placeholder="Enter Project Name"></td>
            <td class="border px-4 py-2"><input type="date" class="form-control w-full"></td>
            <td class="border px-4 py-2"><input type="date" class="form-control w-full"></td>
            <td class="border px-4 py-2"><input type="text" class="form-control w-full" placeholder="Enter Customer Name"></td>
            <td class="border px-4 py-2"><input type="text" class="form-control w-full" placeholder="Enter Remark"></td>
            <td class="border px-4 py-2"><input type="text" class="form-control w-full" placeholder="Enter Status"></td>
        `;
    } else if (section === 'summaryBOM') {
        // Add row for the summary BOM section
        newRow.innerHTML = `
            <td class="border px-4 py-2">
                <select class="form-control w-full p-2 border border-gray-300 rounded">
                    <option value="">Select Category</option>
                    <option value="Category 1">Category 1</option>
                    <option value="Category 2">Category 2</option>
                    <option value="Category 3">Category 3</option>
                </select>
            </td>
        `;
    } else if (section === 'design' || section === 'ppe') {
        // Add row for the design or ppe section
        newRow.innerHTML = `
            <td class="border px-4 py-2"><input type="text" class="form-control  p-2 border rounded  w-full" placeholder="Enter ${section.charAt(0).toUpperCase() + section.slice(1)} Item"></td>
            <td class="border px-4 py-2">
                <select class="form-control w-full p-2 border border-gray-300 rounded">
                    <option value="">Select Role</option>
                    <option value="Role 1">Role 1</option>
                    <option value="Role 2">Role 2</option>
                    <option value="Role 3">Role 3</option>
                </select>
            </td>
        `;
    }
    // Append the new row to the section
    sectionDiv.appendChild(newRow);
}


function removeRow(section) {
    var sectionDiv = document.getElementById(section + 'Rows');
    var rows = sectionDiv.getElementsByTagName('tr');
    if (rows.length > 0) {
        sectionDiv.removeChild(rows[rows.length - 1]);
    }
}


function searchTable() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toLowerCase();
    table = document.querySelector("#projectSection table");
    tr = table.getElementsByTagName("tr");

    for (i = 1; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[4]; // Assuming customer name is the 5th column
        if (td) {
            txtValue = td.getElementsByTagName("input")[0].value || td.textContent;
            if (txtValue.toLowerCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
function addModule() {
    var moduleTable = document.getElementById("moduleRows");
    var newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td class="border px-4 py-2"><input type="text" class="form-control p-2 border rounded w-full" placeholder="Enter Module Name"></td>
        <td class="border px-4 py-2"><input type="checkbox"></td>
        <td class="border px-4 py-2"><input type="checkbox"></td>
        <td class="border px-4 py-2"><input type="checkbox"></td>
    `;

    moduleTable.appendChild(newRow);
}

function removeModule() {
    var moduleTable = document.getElementById("moduleRows");
    var rows = moduleTable.getElementsByTagName('tr');
    if (rows.length > 0) {
        moduleTable.removeChild(rows[rows.length - 1]);
    }
}

