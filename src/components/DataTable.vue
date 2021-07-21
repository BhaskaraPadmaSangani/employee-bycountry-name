<template>
  <div id="app" class="container">
    <h1 class="text-center">DataTable</h1>

    <table id="myTable" style="width:100%">
      <thead>
        <!-- thead background color
        <tr style="background-color:white"> -->
          <tr>
          <th>Name</th>
          <th>Position</th>
          <th>Office</th>
          <th>Age</th>
          <th>Start date</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody></tbody>
       <tfoot>
            <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
            </tr>
        </tfoot>
    </table>
  </div>
</template>
 
<script>
import $ from "jquery";
export default {
  name: "DataTable",
  data() {
    return {
      data: [
        {
          name: "Airi Satou",
          position: "	Accountant",
          office: "Tokyo",
          age: 33,
          startdate: "2008/11/28",
          salary: "$162,700",
        },
        {
          name: "Angelica Ramos",
          position: "	Chief Executive Officer (CEO)",
          office: "	London",
          age: 47,
          startdate: "2009/10/09",
          salary: " $1,200,000",
        },
        {
          name: "Ashton Cox",
          position: "	Junior Technical Author",
          office: "	San Francisco",
          age: 66,
          startdate: "2009/01/12",
          salary: " $86,000",
        },
        {
          name: "Bradley Greer",
          position: "	Software Engineer",
          office: "	London",
          age: 41,
          startdate: "2012/10/13",
          salary: " $132,000",
        },
        {
          name: "Brenden Wagner",
          position: "	Software Engineer",
          office: "San Francisco",
          age: 28,
          startdate: "2011/06/07",
          salary: "$206,850",
        },
        {
          name: "Brielle Williamson",
          position: "Integration Specialist",
          office: "New York",
          age: 61,
          startdate: "2012/12/02",
          salary: "$372,000",
        },
        {
          name: "Bruno Nash",
          position: "Software Engineer",
          office: "London",
          age: 38,
          startdate: "2011/05/03",
          salary: " $163,500",
        },
        {
          name: "Caesar Vance",
          position: "	Pre-Sales Support",
          office: "	New York",
          age: 21,
          startdate: "2011/12/12",
          salary: " $106,450",
        },
        {
          name: "Cara Stevens",
          position: " Sales Assistant",
          office: "	New York",
          age: 46,
          startdate: "2011/12/06",
          salary: " $145,600",
        },
        {
          name: "Cedric Kelly",
          position: "		Senior Javascript Developer",
          office: "Edinburgh",
          age: 22,
          startdate: "2012/03/29",
          salary: " $433,060",
        },
        {
          name: "Charde Marshall",
          position: "	Regional Director",
          office: "San Francisco",
          age: 36,
          startdate: "2008/10/16",
          salary: " $470,600",
        },
        {
          name: "Colleen Hurst",
          position: "	Javascript Developer",
          office: "San Francisco",
          age: 39,
          startdate: "2009/09/15",
          salary: " $205,500",
        },
        {
          name: "Dai Rios",
          position: "Personnel Lead",
          office: "	Edinburgh",
          age: 35,
          startdate: "2012/09/26",
          salary: " $217,500",
        },
        {
          name: "Donna Snider",
          position: "	Customer Support",
          office: "New York",
          age: 27,
          startdate: "2011/01/25",
          salary: " $112,000",
        },
        {
          name: "Doris Wilder",
          position: "	Sales Assistant",
          office: "	Sydney",
          age: 23,
          startdate: "2010/09/20",
          salary: " $85,600",
        },
        {
          name: "Finn Camacho",
          position: "Support Engineer",
          office: "	San Francisco",
          age: 47,
          startdate: "2009/07/07",
          salary: " $87,500",
        },
        {
          name: "Fiona Green",
          position: "	Chief Operating Officer (COO)",
          office: "San Francisco",
          age: 48,
          startdate: "2010/03/11",
          salary: " $850,000",
        },
        {
          name: "Garrett Winters",
          position: "	Accountant",
          office: "Tokyo",
          age: 63,
          startdate: "2011/07/25",
          salary: " $170,750",
        },
        // if we change this name then the o/p is in abcd order onlyi.e correct order
        {
          name: "Gail",
          position: "	Team Leader",
          office: "San Francisco",
          age: 22,
          startdate: "2008/10/26",
          salary: " $235,500",
        },
        {
          name: "Gavin Joyce",
          position: "Developer",
          office: "Edinburgh",
          age: 42,
          startdate: "2010/12/22",
          salary: "$92,575",
        },
        {
          name: "Gloria Little",
          position: "	Systems Administrator",
          office: "New York",
          age: 59,
          startdate: "2009/04/10",
          salary: " $237,500",
        },
        {
          name: "Haley Kennedy",
          position: "Senior Marketing Designer",
          office: "London",
          age: 43,
          startdate: "2012/12/18",
          salary: " $313,500",
        },
        {
          name: "Hermione Butler",
          position: "Regional Director",
          office: "	London",
          age: 47,
          startdate: "2011/03/21",
          salary: " $356,250",
        },
        {
          name: "Herrod Chandler",
          position: "	Sales Assistant",
          office: "San Francisco",
          age: 59,
          startdate: "2012/08/06",
          salary: "$137,500",
        },
        {
          name: "Hope Fuentes",
          position: "Secretary",
          office: "San Francisco",
          age: 41,
          startdate: "2010/02/12",
          salary: "$109,850",
        },
        {
          name: "Howard Hatfield",
          position: "	Office Manager",
          office: "	San Francisco",
          age: 51,
          startdate: "2008/12/16",
          salary: "$164,500",
        },
        {
          name: "Jackson Bradshaw",
          position: "	Director",
          office: "New York",
          age: 65,
          startdate: "2008/09/26",
          salary: " $645,750",
        },
        {
          name: "Jena Gaines",
          position: "	Office Manager",
          office: "London",
          age: 30,
          startdate: "2008/12/19",
          salary: " $90,560",
        },
        {
          name: "Jenette Caldwell",
          position: "	Development Lead",
          office: "New York",
          age: 30,
          startdate: "2011/09/03",
          salary: "$345,000",
        },
        {
          name: "Jennifer Acosta",
          position: "Junior Javascript Developer",
          office: "	Edinburgh",
          age: 43,
          startdate: "2013/02/01",
          salary: " $75,650",
        },
        {
          name: "Jennifer Chang",
          position: "Regional Director",
          office: "Singapore",
          age: 28,
          startdate: "2010/11/14",
          salary: " $357,650",
        },
        {
          name: "Jonas Alexander",
          position: "Developer",
          office: "San Francisco",
          age: 30,
          startdate: "2010/07/14",
          salary: " $86,500",
        },
        {
          name: "Lael Greer",
          position: "	Systems Administrator",
          office: "London",
          age: 21,
          startdate: "2009/02/27",
          salary: " $103,500",
        },
        {
          name: "Martena Mccray",
          position: "	Post-Sales support",
          office: "Edinburgh",
          age: 46,
          startdate: "2011/03/09",
          salary: " $324,050",
        },
        {
          name: "Michael Bruce",
          position: "	Javascript Developer",
          office: "	Singapore",
          age: 29,
          startdate: "2011/06/27",
          salary: " $183,000",
        },
        {
          name: "Michael Silva",
          position: "	Marketing Designer",
          office: "	London",
          age: 66,
          startdate: "2012/11/27",
          salary: " $198,500",
        },
        {
          name: "Michelle House",
          position: "	Integration Specialist",
          office: "Sydney",
          age: 37,
          startdate: "2011/06/02",
          salary: "$95,400",
        },
        {
          name: "Olivia Liang",
          position: "	Support Engineer",
          office: "Singapore",
          age: 64,
          startdate: "2011/02/03",
          salary: "2011/02/03",
        },
        {
          name: "Paul Byrd",
          position: "	Chief Financial Officer (CFO)",
          office: "New York",
          age: 64,
          startdate: "2010/06/09",
          salary: "$725,000",
        },
        {
          name: "Prescott Bartlett",
          position: "Technical Author",
          office: "London",
          age: 27,
          startdate: "2011/05/07",
          salary: "$145,000",
        },
        {
          name: "Quinn Flynn",
          position: "	Support Lead",
          office: "Edinburgh",
          age: 22,
          startdate: "2013/03/03",
          salary: " $342,000",
        },
        {
          name: "Rhona Davidson",
          position: "	Integration Specialistt",
          office: "	Tokyo",
          age: 55,
          startdate: "2010/10/14",
          salary: "$327,900",
        },
        {
          name: "Sakura Yamamoto",
          position: "	Support Engineer",
          office: "	Tokyo",
          age: 37,
          startdate: "2009/08/19",
          salary: " $139,575",
        },
        {
          name: "Serge Baldwin",
          position: "Data Coordinator",
          office: "Singapore",
          age: 64,
          startdate: "2012/04/09",
          salary: "$138,575",
        },
        {
          name: "Shad Decker",
          position: "Regional Director",
          office: "Edinburgh",
          age: 51,
          startdate: "2008/11/13",
          salary: " $183,000",
        },
        {
          name: "Shou Itou",
          position: "Regional Marketing",
          office: "	Tokyo",
          age: 20,
          startdate: "2011/08/14",
          salary: " $163,000",
        },
        {
          name: "Sonya Frost",
          position: "Software Engineer",
          office: "	Edinburgh",
          age: 23,
          startdate: "2008/12/13",
          salary: "$103,600",
        },
        {
          name: "Suki Burks",
          position: "	Developer",
          office: "	London",
          age: 53,
          startdate: "2009/10/22",
          salary: " $114,500",
        },
        {
          name: "Tatyana Fitzpatrick",
          position: "	Regional Director",
          office: "	London",
          age: 19,
          startdate: "2010/03/17",
          salary: " $385,750",
        },
        {
          name: "Thor Walton",
          position: "Developer",
          office: "	Tokyo",
          age: 61,
          startdate: "2013/08/11",
          salary: "$98,540",
        },
        {
          name: "Tiger Nixon",
          position: "System Architect",
          office: "		Edinburgh",
          age: 61,
          startdate: "2011/04/25",
          salary: "$320,800",
        },
        {
          name: "Timothy Mooney",
          position: "	Office Manager",
          office: "	London",
          age: 37,
          startdate: "2008/12/11",
          salary: " $136,200",
        },
        {
          name: "Unity Butler",
          position: "	Marketing Designer",
          office: "	San Francisco",
          age: 47,
          startdate: "2009/12/09",
          salary: "$85,675",
        },
        {
          name: "Vivian Harrell",
          position: "Financial Controller",
          office: "	San Francisco",
          age: 62,
          startdate: "2009/02/14",
          salary: " $452,500",
        },
        {
          name: "Yuri Berry",
          position: "	Chief Marketing Officer (CMO)",
          office: "	New York",
          age: 40,
          startdate: "2009/06/25",
          salary: "$675,000",
        },
        {
          name: "Zenaida Frank",
          position: "	Software Engineer",
          office: "	New York",
          age: 63,
          startdate: "2010/01/04",
          salary: "$125,250",
        },
        {
          name: "Zorita Serrano",
          position: "	Software Engineer",
          office: "	San Francisco",
          age: 56,
          startdate: "2012/06/01",
          salary: " $115,000",
        },
      ],
    };
  },
  mounted() {
    this.getUserData();  },
  methods: {
    getUserData() {
       var groupColumn = 2;
    var table = $('#myTable').DataTable({
        data: this.data,
        columns: [
          { data: "name" },
          { data: "position" },
          { data: "office" },
          { data: "age" },
          { data: "startdate" },
          { data: "salary" },
        ],
        "columnDefs": [
            { "visible": false, "targets": groupColumn }
        ],
        "order": [[ groupColumn, 'asc' ]],
        "displayLength": 25,
        "drawCallback": function () {
            var api = this.api();
            var rows = api.rows( {page:'current'} ).nodes();
            var last=null;
 
            api.column(groupColumn, {page:'current'} ).data().each( function ( group, i ) {
                if ( last !== group ) {
                    $(rows).eq( i ).before(
                        '<tr class="group"><td colspan="5">'+group+'</td></tr>'
                    );
 
                    last = group;
                }
            } );
        }
    } );
 
    // Order by the grouping
    $('#myTable tbody').on( 'click', 'tr.group', function () {
        var currentOrder = table.order()[0];
        if ( currentOrder[0] === groupColumn && currentOrder[1] === 'asc' ) {
            table.order( [ groupColumn, 'desc' ] ).draw();
        }
        else {
            table.order( [ groupColumn, 'asc' ] ).draw();
        }
    } );
    
    },
  },
  
};
</script>
 
<style>
tr.group,
tr.group:hover {
    background-color: #ddd !important;
}
  #myTable tr td {
  border: 1px solid black;
 }
</style>