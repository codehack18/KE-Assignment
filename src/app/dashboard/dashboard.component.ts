import { Component, Input, ElementRef } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Options } from "highcharts/highcharts";
import Exporting from 'highcharts/modules/exporting';
Exporting(Highcharts);
import exportdata from 'highcharts/modules/export-data';
exportdata(Highcharts);


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {


  // highcharts = Highcharts;
  options: Options;

  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor = 'chart';
  highchart0 = Highcharts;
  chartOptions0: any;
  chartOptions1: any;
  chartOptions2: any;
  chartOptions3: any;
  showHide: boolean = false;

  chartData = [
    {
      "categories": {
        "cd_1": "In Progress",
        "cd_2": "Completed",
        "cd_3": "Planned",
        "cd_4": "On Hold",
        "cd_5": "Cancelled"
      },
      "categoryorder": [
        "cd_1",
        "cd_2",
        "cd_3",
        "cd_4",
        "cd_5"
      ],
      "chartdata": {
        "cd_1": 9,
        "cd_2": 7,
        "cd_3": 5,
        "cd_4": 3,
        "cd_5": 1
      },

      "piecolor": ["rgb(85, 175, 255)", "rgb(84, 79, 197)", "rgb(0, 226, 114)", "#a769a7", "rgb(254, 106, 53)"],
      "colpieseries": "Percentage",
      "bgcolor": "#fffcfc",
      "seriesname": "project status",
      "yaxistitle": "Project Count",
      "titletext": "Projects by Status",
      "chart_type": "column_chart",
      "chart_Id": "chart1"

    },



    {
      "barcategories": {
        "cb_1": "Facilities",
        "cb_2": "Security Services",
        "cb_3": "Performance management",
        "cb_4": "Network Services",
        "cb_5": "Client Service",
      },
      "barorder": [
        "cb_1",
        "cb_2",
        "cb_3",
        "cb_4",
        "cb_5",
      ],
      "bardata": {
        "cb_1": 4,
        "cb_2": 4,
        "cb_3": 6,
        "cb_4": 15,
        "cb_5": 12

      },
      "barpiecolor": ["rgb(254, 106, 53)", "#a769a7", "rgb(0, 226, 114)", "rgb(84, 79, 197)", "#3c96f1"],
      "barcolor": ['#0d7e6f'],
      "texttitle": "Projects Type",
      "chartype": "bar_chart",
      "barseries": "Type",
      "backgr": "#fffcfc",
      "chart_Id": "chart2",
      "yaxititle": "Projects Type count"
    },


    {
      "categorie": {
        "ch_1": "Jan",
        "ch_2": "Feb",
        "ch_3": "Mar",
        "ch_4": "Apr",
        "ch_5": "May",
        "ch_6": "Jun",
        "ch_7": "Jul",
        "ch_8": "Aug",
        "ch_9": "Spt",
        "ch_10": "Oct",
        "ch_11": "Nov",
        "ch_12": "Dec"
      },
      "categoryorders": [
        "ch_1",
        "ch_2",
        "ch_3",
        "ch_4",
        "ch_5",
        "ch_6",
        "ch_7",
        "ch_8",
        "ch_9",
        "ch_10",
        "ch_11",
        "ch_12",

      ],
      "linedata": {
        "ch_1": 1,
        "ch_2": 2,
        "ch_3": 2.5,
        "ch_4": 3,
        "ch_5": 3.5,
        "ch_6": 4,
        "ch_7": 4.5,
        "ch_8": 5,
        "ch_9": 5.5,
        "ch_10": 6,
        "ch_11": 7,
        "ch_12": 8.5
      },

      "linedata2": {
        "ch_1": -2.9,
        "ch_2": -3.6,
        "ch_3": -0.6,
        "ch_4": 4.8,
        "ch_5": 10.2,
        "ch_6": 14.5,
        "ch_7": 17.6,
        "ch_8": 16.5,
        "ch_9": 12.0,
        "ch_10": 6.5,
        "ch_11": 2.0,
        "ch_12": -0.9
      },


      "linecolor": ['#0d7e6f', '#3c96f1'],
      "charttype": "line_chart",
      "chart_Id": "chart3",
      "backcolor": "#fffcfc",
      "title_text": "Time Vs Project phase",
      "serrisename1": "Time",
      "serrisename2": "Project phase",
      "yaxistitle": "Count of hours"
    },


    {
      "piedata": {
        "pd_1": "Project Planning Stage",
        "pd_2": "Monitor & Control",
        "pd_3": "Execution Stage",
        "pd_4": "Project Initiation Stage",
        "pd_5": "Closure Stage",

      },
      "pieorder": [
        "pd_1",
        "pd_2",
        "pd_3",
        "pd_4",
        "pd_5",
      ],

      "pievalue": {
        "pd_1": "55.02",
        "pd_2": "26.71",
        "pd_3": "1.09",
        "pd_4": "15.5",
        "pd_5": "1.68",
      },

      "piecolor": ["#3c96f1", "#0d7e6f", "gray", "rgb(82, 22, 22)", "darkmagenta"],
      "piebgcolor": "#fffcfc",
      "pietitle": "Project Phase % Completed",
      "pieserisename": "Percentage",
      "chart_type": "pie_chart",
      "chart_Id": "chart4",
      "yaxistext": "Project Phase % Count",
    },
  ]

  @Input() piData: { name: string; y: number }[] = [];
  constructor(private el: ElementRef) { }


  ngOnInit() {
    this.chartData.forEach((row, i) => {

      if (row.chart_type == "column_chart") {

        let categories = [];

        let chartdata = [];

        let data = [];
        row.categoryorder.forEach((ab) => {
          categories.push(row.categories[ab]);
          chartdata.push(row.chartdata[ab])
          data.push(row.chartdata[ab])
        });


        // console.log(categories)
        this.chartOptions0 = this.options = {


          chart: {
            type: "column",
            backgroundColor: row.bgcolor,
            borderColor: row.bgcolor,

          },

          credits: {
            enabled: false,
          },

          title: {
            text: row.titletext,
            style: {
              fontFamily: 'math',
              fontSize: '22'
            }
          },

          accessibility: {
            enabled: false
          },

          colors: ['#3c96f1'],


          xAxis: {
            categories: categories,
            labels: {
              style: {
                fontSize: '18',
                fontFamily: 'emoji'
              }
            }
          },

          yAxis: {
            title: {
              text: row.yaxistitle,
              style: {
                color: 'black',
                fontSize: '18',
                fontFamily: 'math'
              }
            }
          },


          series: [{
            type: undefined,
            name: row.seriesname,
            data: chartdata
          }],



        }
      }
    });
    let chart = Highcharts.chart(this.el.nativeElement.querySelector('#column'), this.chartOptions0);


    // Line chart 
    this.chartData.forEach((col, j) => {

      if (col.charttype == "line_chart") {

        let categorie = [];
        let linedata = [];
        let linedata2 = [];
        let data = [];
        col.categoryorders.forEach((ad) => {
          categorie.push(col.categorie[ad]);
          linedata.push(col.linedata[ad])
          linedata2.push(col.linedata2[ad])
          data.push(col.linedata[ad])
        });

        this.chartOptions1 = this.options = {

          chart: {
            type: "line",
            backgroundColor: col.backcolor,
            borderColor: col.backcolor,

          },

          credits: {
            enabled: false
          },

          title: {
            text: col.title_text,
            style: {
              fontFamily: 'math',
              fontSize: '22'
            }
          },

          accessibility: {
            enabled: false
          },

          xAxis: {
            categories: categorie
          },

          colors: col.linecolor,

          yAxis: {
            title: {
              text: col.yaxistitle,
              style: {
                color: 'black',
                fontSize: '18',
                fontFamily: 'math'
              }
            }
          },

          plotOptions: {
            line: {
              dataLabels: {
                enabled: true
              },
              // enableMouseTracking: true
            }
          },

          series: [{
            type: undefined,
            name: col.serrisename1,
            data: linedata
          }, {
            type: undefined,
            name: col.serrisename2,
            data: linedata2
          }],

        }
      }
    });

    let charts = Highcharts.chart(this.el.nativeElement.querySelector('#line'), this.chartOptions1);

    // Bar chart 


    this.chartData.forEach((mor, k) => {

      if (mor.chartype == "bar_chart") {

        let barcategories = [];

        let bardata = [];
        let datab = [];

        mor.barorder.forEach((br) => {
          barcategories.push(mor.barcategories[br]);
          bardata.push(mor.bardata[br])
          datab.push(mor.bardata[br]);
        });

        this.chartOptions2 = this.options = {

          chart: {
            type: "bar",
            backgroundColor: mor.backgr,
            borderColor: mor.backgr,

          },

          credits: {
            enabled: false
          },

          title: {
            text: mor.texttitle,
            style: {
              fontFamily: 'math',
              fontSize: '22'
            }
          },

          accessibility: {
            enabled: false
          },

          exporting: {
            enabled: true
          },

          colors: mor.barcolor,

          xAxis: {
            categories: barcategories,
            labels: {
              style: {
                fontSize: '16',
                fontFamily: 'math'
              }
            }
          },

          yAxis: {
            title: {
              text: mor.yaxititle,
              style: {
                fontSize: '18',
                fontFamily: 'math'
              }
            }
          },

          plotOptions: {
            series: {
              stacking: 'normal',
              dataLabels: {
                enabled: false,
              }

            }
          },
          series: [{
            type: undefined,
            name: mor.barseries,
            data: bardata
          }],





        }
      }
    })

    let char = Highcharts.chart(this.el.nativeElement.querySelector('#bar'), this.chartOptions2);


    // Pie chart 
    let pie_data = [];
    this.chartData.forEach((crl, l) => {
      if (crl.chart_type == "pie_chart") {

        let data = [];
        let piedata = [];
        let pievalue = [];

        crl.pieorder.forEach((pd) => {
          piedata.push(crl.piedata[pd]);
          pievalue.push(crl.pievalue[pd])
          data.push(crl.piedata[pd])
          pie_data.push({
            name: crl.piedata[pd],
            y: parseInt(crl.pievalue[pd])
          })
        })

        this.chartOptions3 = this.options = {

          chart: {
            type: "pie",
            backgroundColor: crl.piebgcolor,
            borderColor: crl.piebgcolor,

          },


          colors: crl.piecolor,

          credits: {
            enabled: false
          },


          tooltip: {
            valueSuffix: '%'
          },
          title: {
            text: crl.pietitle,
            style: {
              fontFamily: 'math',
              fontSize: '22'
            }
          },
          accessibility: {
            enabled: false
          },

          plotOptions: {
            pie: {
              cursor: 'pointer',
              showInLegend: true
            }
          },
          series: [
            {
              type: undefined,
              name: crl.pieserisename,
              colorByPoint: true,
              data: pie_data,


            }
          ],



        };
        console.log(pie_data)
      }
    })

    let cha = Highcharts.chart(this.el.nativeElement.querySelector('#pie'), this.chartOptions3);

  }

  chartType(type) {
    // console.log(type.target.value)

    let charts = type.target.value
    if (charts === 'column') {
      this.chartData.forEach((row, i) => {

        if (row.chart_type == "column_chart") {

          let categories = [];

          let chartdata = [];

          let data = [];
          row.categoryorder.forEach((ab) => {
            categories.push(row.categories[ab]);
            chartdata.push(row.chartdata[ab]);
            data.push(row.chartdata[ab])
          });

          this.chartOptions0 = this.options = {


            chart: {
              type: "column",
              backgroundColor: row.bgcolor,
              borderColor: row.bgcolor,

            },

            credits: {
              enabled: false,
            },

            title: {
              text: row.titletext,

              style: {
                fontFamily: 'math',
                fontSize: '22'
              }
            },

            accessibility: {
              enabled: false
            },

            colors: ['#3c96f1'],

            xAxis: {
              categories: categories,
              labels: {
                style: {
                  fontSize: '18',
                  fontFamily: 'emoji'
                }
              }
            },
            yAxis: {
              title: {
                text: row.yaxistitle,
                style: {
                  fontSize: '18',
                  fontFamily: 'math'
                }
              }
            },
            series: [{
              type: undefined,
              name: row.seriesname,
              data: chartdata
            }],



          };
        }
      });

      let chart = Highcharts.chart(this.el.nativeElement.querySelector('#column'), this.chartOptions0);


    } else if (charts === 'bar') {

      this.chartData.forEach((row, i) => {

        if (row.chart_type == "column_chart") {

          let categories = [];

          let chartdata = [];

          let data = [];
          row.categoryorder.forEach((ab) => {
            categories.push(row.categories[ab]);
            chartdata.push(row.chartdata[ab]);
            data.push(row.chartdata[ab])
          });

          this.chartOptions0 = this.options = {
            chart: {
              type: "bar",
              backgroundColor: row.bgcolor,
              borderColor: row.bgcolor,

            },

            credits: {
              enabled: false,
            },

            title: {
              text: row.titletext,

              style: {
                fontFamily: 'math',
                fontSize: '22'
              }
            },

            accessibility: {
              enabled: false
            },

            colors: ['#3c96f1'],

            xAxis: {
              categories: categories,
              labels: {
                style: {
                  fontSize: '18',
                  fontFamily: 'emoji'
                }
              }
            },

            yAxis: {
              title: {
                text: row.yaxistitle,
                style: {
                  fontSize: '18',
                  fontFamily: 'math'
                }
              }
            },

            series: [{
              type: undefined,
              name: row.seriesname,
              data: chartdata
            }],



          };
        }
      })
      let chart = Highcharts.chart(this.el.nativeElement.querySelector('#column'), this.chartOptions0);


    } else if (charts === 'line') {
      this.chartData.forEach((row, i) => {

        if (row.chart_type == "column_chart") {

          let categories = [];

          let chartdata = [];

          let data = [];
          row.categoryorder.forEach((ab) => {
            categories.push(row.categories[ab]);
            chartdata.push(row.chartdata[ab]);
            data.push(row.chartdata[ab])
          });

          this.chartOptions0 = this.options = {
            chart: {
              type: "line",
              backgroundColor: row.bgcolor,
              borderColor: row.bgcolor,

            },

            credits: {
              enabled: false,
            },

            title: {
              text: row.titletext,

              style: {
                fontFamily: 'math',
                fontSize: '22'
              }
            },

            accessibility: {
              enabled: false
            },

            colors: ['#3c96f1'],

            xAxis: {
              categories: categories,
              labels: {
                style: {
                  fontSize: '18',
                  fontFamily: 'emoji'
                }
              }
            },
            yAxis: {
              title: {
                text: row.yaxistitle,
                style: {
                  fontSize: '18',
                  fontFamily: 'math'
                }
              }
            },

            series: [{
              type: undefined,
              name: row.seriesname,
              data: chartdata
            }],



          };
        }
      })
      let chart = Highcharts.chart(this.el.nativeElement.querySelector('#column'), this.chartOptions0);

    } else if (charts === 'pie') {

      let pie_data = [];
      this.chartData.forEach((row, i) => {

        if (row.chart_type == "column_chart") {

          let categories = [];

          let chartdata = [];

          let data = [];
          row.categoryorder.forEach((ab) => {
            categories.push(row.categories[ab]);
            chartdata.push(row.chartdata[ab]);
            data.push(row.chartdata[ab])
            pie_data.push({
              name: row.categories[ab],
              y: parseInt(row.chartdata[ab])
            })
          });

          this.chartOptions0 = this.options = {
            chart: {
              type: "pie",
              backgroundColor: row.bgcolor,
              borderColor: row.bgcolor,

            },


            colors: row.piecolor,

            credits: {
              enabled: false
            },

            title: {
              text: row.titletext,
              style: {
                fontFamily: 'math',
                fontSize: '22'
              }
            },
            accessibility: {
              enabled: false
            },

            plotOptions: {
              pie: {
                cursor: 'pointer',
                showInLegend: true
              }
            },
            series: [
              {
                type: undefined,
                name: row.colpieseries,
                colorByPoint: true,
                data: pie_data
              }
            ],




          }
        }
      })
      let chart = Highcharts.chart(this.el.nativeElement.querySelector('#column'), this.chartOptions0);
    }


  }


  changeType(type) {
    // console.log(type.target.value)
    let chartTypes = type.target.value
    if (chartTypes === 'column') {

      this.chartData.forEach((col, j) => {

        if (col.charttype == "line_chart") {

          let categorie = [];
          let linedata = [];
          let linedata2 = [];
          let data = [];
          col.categoryorders.forEach((ad) => {
            categorie.push(col.categorie[ad]);
            linedata.push(col.linedata[ad])
            linedata2.push(col.linedata2[ad])
            data.push(col.linedata[ad])
          });

          this.chartOptions1 = this.options = {


            chart: {
              type: "column",
              backgroundColor: col.backcolor,
              borderColor: col.backcolor,

            },

            credits: {
              enabled: false,
            },

            title: {
              text: col.title_text,

              style: {
                fontFamily: 'math',
                fontSize: '22'
              }
            },

            accessibility: {
              enabled: false
            },

            colors: col.linecolor,

            xAxis: {
              categories: categorie,
              labels: {
                style: {
                  fontSize: '18',
                  fontFamily: 'emoji'
                }
              }
            },

            yAxis: {
              title: {
                text: col.yaxistitle,
                style: {
                  color: 'black',
                  fontSize: '18',
                  fontFamily: 'math'
                }
              }
            },


            series: [{
              type: undefined,
              name: col.serrisename1,
              data: linedata
            }, {
              type: undefined,
              name: col.serrisename2,
              data: linedata2
            }],


          };
        }
      })

      let charts = Highcharts.chart(this.el.nativeElement.querySelector('#line'), this.chartOptions1);


    } else if (chartTypes === 'bar') {

      this.chartData.forEach((col, j) => {

        if (col.charttype == "line_chart") {

          let categorie = [];
          let linedata = [];
          let linedata2 = [];
          let data = [];
          col.categoryorders.forEach((ad) => {
            categorie.push(col.categorie[ad]);
            linedata.push(col.linedata[ad])
            linedata2.push(col.linedata2[ad])
            data.push(col.linedata[ad])
          });

          this.chartOptions1 = this.options = {

            chart: {
              type: "bar",
              backgroundColor: col.backcolor,
              borderColor: col.backcolor,

            },

            credits: {
              enabled: false
            },

            title: {
              text: col.title_text,
              style: {
                fontFamily: 'math',
                fontSize: '22'
              }
            },

            accessibility: {
              enabled: false
            },

            xAxis: {
              categories: categorie
            },

            colors: col.linecolor,

            yAxis: {
              title: {
                text: col.yaxistitle,
                style: {
                  fontSize: '18',
                  fontFamily: 'math'
                }
              }
            },

            plotOptions: {
              line: {
                dataLabels: {
                  enabled: true
                },
                // enableMouseTracking: true
              }
            },

            series: [{
              type: undefined,
              name: col.serrisename1,
              data: linedata2
            }, {
              type: undefined,
              name: col.serrisename2,
              data: linedata2
            }],





          };
        }
      })

      let charts = Highcharts.chart(this.el.nativeElement.querySelector('#line'), this.chartOptions1);


    } else if (chartTypes === 'line') {

      this.chartData.forEach((col, j) => {

        if (col.charttype == "line_chart") {

          let categorie = [];
          let linedata = [];
          let linedata2 = [];
          let data = [];
          col.categoryorders.forEach((ad) => {
            categorie.push(col.categorie[ad]);
            linedata.push(col.linedata[ad])
            linedata2.push(col.linedata2[ad])
            data.push(col.linedata[ad])
          });

          this.chartOptions1 = this.options = {

            chart: {
              type: "line",
              backgroundColor: col.backcolor,
              borderColor: col.backcolor,

            },

            credits: {
              enabled: false
            },

            title: {
              text: col.title_text,
              style: {
                fontFamily: 'math',
                fontSize: '22'
              }
            },

            accessibility: {
              enabled: false
            },

            xAxis: {
              categories: categorie
            },

            colors: col.linecolor,

            yAxis: {
              title: {
                text: col.yaxistitle,
                style: {
                  fontSize: '18',
                  fontFamily: 'math'
                }
              }
            },

            plotOptions: {
              line: {
                dataLabels: {
                  enabled: true
                },
                // enableMouseTracking: true
              }
            },

            series: [{
              type: undefined,
              name: col.serrisename1,
              data: linedata
            }, {
              type: undefined,
              name: col.serrisename2,
              data: linedata2
            }],





          }
        }
      })

      let charts = Highcharts.chart(this.el.nativeElement.querySelector('#line'), this.chartOptions1);
    } else if (chartTypes === 'pie') {
      let pie_data = [];
      this.chartData.forEach((col, j) => {
        
        if (col.charttype == "line_chart") {

          let categorie = [];
          let linedata = [];
          let linedata2 = [];
          let data = [];
          col.categoryorders.forEach((ad) => {
            categorie.push(col.categorie[ad]);
            linedata.push(col.linedata[ad]);
            linedata2.push(col.linedata2[ad]);
            data.push(col.linedata[ad])
            pie_data.push({
              name: col.linedata[ad],
              y: parseInt(col.linedata2[ad])
            })
          });

          this.chartOptions1 = this.options = {

            chart: {
              type: "pie",
              backgroundColor: col.backcolor,
              borderColor: col.backcolor,

            },

            credits: {
              enabled: false
            },

            title: {
              text: col.title_text,
              style: {
                fontFamily: 'math',
                fontSize: '22'
              }
            },

            accessibility: {
              enabled: false
            },

            plotOptions: {
              pie: {
                cursor: 'pointer',
                showInLegend: true
              }
            },

            xAxis: {
              categories: categorie
            },

            colors: col.linecolor,

            yAxis: {
              title: {
                text: col.yaxistitle,
                style: {
                  fontSize: '18',
                  fontFamily: 'math'
                }
              }
            },

            series: [
              {
                type: undefined,
                name: 'Percentage',
                colorByPoint: true,
                data: pie_data


              }
            ],





          };
        }
      })
      let charts = Highcharts.chart(this.el.nativeElement.querySelector('#line'), this.chartOptions1);
    }


  }

  changeChartType(type) {
    // console.log(type.target.value)
    let chartTypes = type.target.value
    if (chartTypes === 'column') {

      this.chartData.forEach((mor, k) => {

        if (mor.chartype == "bar_chart") {

          let barcategories = [];

          let bardata = [];
          let datab = [];

          mor.barorder.forEach((br) => {
            barcategories.push(mor.barcategories[br]);
            bardata.push(mor.bardata[br]);
            datab.push(mor.bardata[br]);
          });


          this.chartOptions2 = this.options = {

            chart: {
              type: "column",
              backgroundColor: mor.backgr,
              borderColor: mor.backgr,

            },

            credits: {
              enabled: false
            },

            title: {
              text: mor.texttitle,
              style: {
                fontFamily: 'math',
                fontSize: '22'
              }
            },

            accessibility: {
              enabled: false
            },

            exporting: {
              enabled: true
            },

            colors: mor.barcolor,

            xAxis: {
              categories: barcategories,
              labels: {
                style: {
                  fontSize: '18',
                  fontFamily: 'math'
                }
              }
            },

            yAxis: {
              title: {
                text: mor.yaxititle,
                style: {
                  fontSize: '18',
                  fontFamily: 'math'
                }
              }
            },

            plotOptions: {
              series: {
                stacking: 'normal',
                dataLabels: {
                  enabled: false,
                }

              }
            },
            series: [{
              type: undefined,
              name: mor.barseries,
              data: bardata,
            }],

          };
        }
      })

      let char = Highcharts.chart(this.el.nativeElement.querySelector('#bar'), this.chartOptions2);


    } else if (chartTypes === 'bar') {

      this.chartData.forEach((mor, k) => {

        if (mor.chartype == "bar_chart") {

          let barcategories = [];

          let bardata = [];
          let datab = [];

          mor.barorder.forEach((br) => {
            barcategories.push(mor.barcategories[br]);
            bardata.push(mor.bardata[br]);
            datab.push(mor.bardata[br]);
          });


          this.chartOptions2 = this.options = {

            chart: {
              type: "bar",
              backgroundColor: mor.backgr,
              borderColor: mor.backgr,

            },

            credits: {
              enabled: false
            },

            title: {
              text: mor.texttitle,
              style: {
                fontFamily: 'math',
                fontSize: '22'
              }
            },

            accessibility: {
              enabled: false
            },

            exporting: {
              enabled: true
            },

            colors: mor.barcolor,

            xAxis: {
              categories: barcategories,
              labels: {
                style: {
                  fontSize: '16',
                  fontFamily: 'math'
                }
              }
            },
            yAxis: {
              title: {
                text: mor.yaxititle,
                style: {
                  fontSize: '18',
                  fontFamily: 'math'
                }
              }
            },

            plotOptions: {
              series: {
                stacking: 'normal',
                dataLabels: {
                  enabled: false,
                }

              }
            },
            series: [{
              type: undefined,
              name: mor.barseries,
              data: bardata,
            }],

          }
        }
      })

      let char = Highcharts.chart(this.el.nativeElement.querySelector('#bar'), this.chartOptions2);



    } else if (chartTypes === 'line') {

      this.chartData.forEach((mor, k) => {

        if (mor.chartype == "bar_chart") {

          let barcategories = [];

          let bardata = [];
          let datab = [];

          mor.barorder.forEach((br) => {
            barcategories.push(mor.barcategories[br]);
            bardata.push(mor.bardata[br]);
            datab.push(mor.bardata[br]);
          });

          this.chartOptions2 = this.options = {

            chart: {
              type: "line",
              backgroundColor: mor.backgr,
              borderColor: mor.backgr,

            },

            credits: {
              enabled: false
            },

            title: {
              text: mor.texttitle,
              style: {
                fontFamily: 'math',
                fontSize: '22'
              }
            },

            accessibility: {
              enabled: false
            },

            exporting: {
              enabled: true
            },

            colors: mor.barcolor,

            xAxis: {
              categories: barcategories,
              labels: {
                style: {
                  fontSize: '16',
                  fontFamily: 'math'
                }
              }
            },

            yAxis: {
              title: {
                text: mor.yaxititle,
                style: {
                  fontSize: '18',
                  fontFamily: 'math'
                }
              }
            },

            plotOptions: {
              series: {
                stacking: 'normal',
                dataLabels: {
                  enabled: false,
                }

              }
            },
            series: [{
              type: undefined,
              name: mor.barseries,
              data: bardata,
            }],

          };
        }
      })

      let char = Highcharts.chart(this.el.nativeElement.querySelector('#bar'), this.chartOptions2);


    } else if (chartTypes === 'pie') {

      let pie_data = [];
      this.chartData.forEach((mor, k) => {

        if (mor.chartype == "bar_chart") {

          let barcategories = [];

          let bardata = [];
          let datab = [];

          mor.barorder.forEach((br) => {
            barcategories.push(mor.barcategories[br]);
            bardata.push(mor.bardata[br]);
            datab.push(mor.bardata[br]);
            pie_data.push({
              name: mor.barcategories[br],
              y: parseInt(mor.bardata[br])
            })
          });



          this.chartOptions2 = this.options = {

            chart: {
              type: "pie",
              backgroundColor: mor.backgr,
              borderColor: mor.backgr,

            },

            credits: {
              enabled: false
            },

            title: {
              text: mor.texttitle,
              style: {
                fontFamily: 'math',
                fontSize: '22'
              }
            },

            accessibility: {
              enabled: false
            },

            plotOptions: {
              pie: {
                cursor: 'pointer',
                showInLegend: true
              }
            },

            exporting: {
              enabled: true
            },

            colors: mor.barpiecolor,

            xAxis: {
              categories: barcategories,
              labels: {
                style: {
                  fontSize: '18',
                  fontFamily: 'math'
                }
              }
            },


            series: [
              {
                type: undefined,
                name: mor.barseries,
                colorByPoint: true,
                data: pie_data


              }
            ],

          }
        }
      })

      let char = Highcharts.chart(this.el.nativeElement.querySelector('#bar'), this.chartOptions2);

    }


  }

  typeChange(type) {

    let chartTypes = type.target.value
    if (chartTypes === 'column') {

      let pie_data = [];
      this.chartData.forEach((crl, l) => {
        if (crl.chart_type == "pie_chart") {

          let data = [];
          let piedata = [];
          let pievalue = [];

          crl.pieorder.forEach((pd) => {
            piedata.push(crl.piedata[pd]);
            pievalue.push(crl.pievalue[pd])
            data.push(crl.piedata[pd])
            pie_data.push({
              name: crl.piedata[pd],
              y: parseInt(crl.pievalue[pd])
            })
          })


          this.chartOptions3 = this.options = {

            chart: {
              type: "column",
              backgroundColor: crl.piebgcolor,
              borderColor: crl.piebgcolor,

            },


            colors: crl.piecolor,

            credits: {
              enabled: false
            },

            title: {
              text: crl.pietitle,
              style: {
                fontFamily: 'math',
                fontSize: '22'
              }
            },
            accessibility: {
              enabled: false
            },

            xAxis: {
              categories: piedata,
              labels: {
                style: {
                  fontSize: '18',
                  fontFamily: 'emoji'
                }
              }
            },

            yAxis: {
              title: {
                text: crl.yaxistext,
                style: {
                  fontSize: '18',
                  fontFamily: 'math'
                }
              }
            },

            series: [
              {
                type: undefined,
                name: crl.pieserisename,
                colorByPoint: true,
                data: pie_data

              }
            ],




          };
          // console.log(piedata)
        }
      })

      let cha = Highcharts.chart(this.el.nativeElement.querySelector('#pie'), this.chartOptions3);

    } else if (chartTypes === 'bar') {

      let pie_data = [];
      this.chartData.forEach((crl, l) => {
        if (crl.chart_type == "pie_chart") {

          let data = [];
          let piedata = [];
          let pievalue = [];

          crl.pieorder.forEach((pd) => {
            piedata.push(crl.piedata[pd]);
            pievalue.push(crl.pievalue[pd])
            data.push(crl.piedata[pd])
            pie_data.push({
              name: crl.piedata[pd],
              y: parseInt(crl.pievalue[pd])
            })
          })

          this.chartOptions3 = this.options = {

            chart: {
              type: "bar",
              backgroundColor: crl.piebgcolor,
              borderColor: crl.piebgcolor,

            },


            colors: crl.piecolor,

            credits: {
              enabled: false
            },

            title: {
              text: crl.pietitle,
              style: {
                fontFamily: 'math',
                fontSize: '22'
              }
            },
            accessibility: {
              enabled: false
            },

            xAxis: {
              categories: piedata,
              labels: {
                style: {
                  fontSize: '18',
                  fontFamily: 'emoji'
                }
              }
            },

            yAxis: {
              title: {
                text: crl.yaxistext,
                style: {
                  fontSize: '18',
                  fontFamily: 'math'
                }
              }
            },


            series: [
              {
                type: undefined,
                name: crl.pieserisename,
                colorByPoint: true,
                data: pie_data


              }
            ],


          };
          // console.log(piedata)
        }
      })

      let cha = Highcharts.chart(this.el.nativeElement.querySelector('#pie'), this.chartOptions3);



    } else if (chartTypes === 'line') {

      let pie_data = [];
      this.chartData.forEach((crl, l) => {
        if (crl.chart_type == "pie_chart") {

          let data = [];
          let piedata = [];
          let pievalue = [];

          crl.pieorder.forEach((pd) => {
            piedata.push(crl.piedata[pd]);
            pievalue.push(crl.pievalue[pd])
            data.push(crl.piedata[pd])
            pie_data.push({
              name: crl.piedata[pd],
              y: parseInt(crl.pievalue[pd])
            })
          })


          this.chartOptions3 = this.options = {

            chart: {
              type: "line",
              backgroundColor: crl.piebgcolor,
              borderColor: crl.piebgcolor,

            },


            colors: crl.piecolor,

            credits: {
              enabled: false
            },

            title: {
              text: crl.pietitle,
              style: {
                fontFamily: 'math',
                fontSize: '22'
              }
            },
            accessibility: {
              enabled: false
            },
            xAxis: {
              categories: piedata,
            },

            yAxis: {
              title: {
                text: crl.yaxistext,
                style: {
                  fontSize: '18',
                  fontFamily: 'math'
                }
              }
            },
            series: [
              {
                type: undefined,
                name: crl.pieserisename,
                colorByPoint: true,
                data: pie_data


              }
            ],




          };
        }
      })

      let cha = Highcharts.chart(this.el.nativeElement.querySelector('#pie'), this.chartOptions3);


    } else if (chartTypes === 'pie') {

      let pie_data = [];
      this.chartData.forEach((crl, l) => {
        if (crl.chart_type == "pie_chart") {

          let data = [];
          let piedata = [];
          let pievalue = [];

          crl.pieorder.forEach((pd) => {
            piedata.push(crl.piedata[pd]);
            pievalue.push(crl.pievalue[pd])
            data.push(crl.piedata[pd])
            pie_data.push({
              name: crl.piedata[pd],
              y: parseInt(crl.pievalue[pd])
            })
          })

          this.chartOptions3 = this.options = {

            chart: {
              type: "pie",
              backgroundColor: crl.piebgcolor,
              borderColor: crl.piebgcolor,

            },


            colors: crl.piecolor,

            credits: {
              enabled: false
            },

            title: {
              text: crl.pietitle,
              style: {
                fontFamily: 'math',
                fontSize: '22'
              }
            },
            accessibility: {
              enabled: false
            },

            plotOptions: {
              pie: {
                cursor: 'pointer',
                showInLegend: true
              }
            },

            series: [
              {
                type: undefined,
                name: crl.pieserisename,
                colorByPoint: true,
                data: pie_data


              }
            ],



          };
        }
      })

      let cha = Highcharts.chart(this.el.nativeElement.querySelector('#pie'), this.chartOptions3);

    }


  }


}


