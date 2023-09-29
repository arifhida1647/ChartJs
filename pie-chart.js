// Data retrieved from https://netmarketshare.com
Highcharts.chart('pie-chart1', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Pie Chart',
        align: 'center'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Chrome',
            y: 70.67,
            sliced: true,
            selected: true
        }, {
            name: 'Edge',
            y: 14.77
        }, {
            name: 'Firefox',
            y: 4.86
        }, {
            name: 'Safari',
            y: 2.63
        }, {
            name: 'Internet Explorer',
            y: 1.53
        }, {
            name: 'Opera',
            y: 1.40
        }, {
            name: 'Sogou Explorer',
            y: 0.84
        }, {
            name: 'QQ',
            y: 0.51
        }, {
            name: 'Other',
            y: 2.6
        }]
    }]
});


// Create the chart
Highcharts.chart('pie-chart2', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Drilldown Pie',
        align: 'center'
    },
    accessibility: {
        announceNewData: {
            enabled: true
        },
        point: {
            valueSuffix: '%'
        }
    },

    plotOptions: {
        series: {
            borderRadius: 5,
            dataLabels: {
                enabled: true,
                format: '{point.name}: {point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [
        {
            name: 'Browsers',
            colorByPoint: true,
            data: [
                {
                    name: 'Chrome',
                    y: 61.04,
                    drilldown: 'Chrome'
                },
                {
                    name: 'Safari',
                    y: 9.47,
                    drilldown: 'Safari'
                },
                {
                    name: 'Edge',
                    y: 9.32,
                    drilldown: 'Edge'
                },
                {
                    name: 'Firefox',
                    y: 8.15,
                    drilldown: 'Firefox'
                },
                {
                    name: 'Other',
                    y: 11.02,
                    drilldown: null
                }
            ]
        }
    ],
    drilldown: {
        series: [
            {
                name: 'Chrome',
                id: 'Chrome',
                data: [
                    [
                        'v97.0',
                        36.89
                    ],
                    [
                        'v96.0',
                        18.16
                    ],
                    [
                        'v95.0',
                        0.54
                    ],
                    [
                        'v94.0',
                        0.7
                    ],
                    [
                        'v93.0',
                        0.8
                    ],
                    [
                        'v92.0',
                        0.41
                    ],
                    [
                        'v91.0',
                        0.31
                    ],
                    [
                        'v90.0',
                        0.13
                    ],
                    [
                        'v89.0',
                        0.14
                    ],
                    [
                        'v88.0',
                        0.1
                    ],
                    [
                        'v87.0',
                        0.35
                    ],
                    [
                        'v86.0',
                        0.17
                    ],
                    [
                        'v85.0',
                        0.18
                    ],
                    [
                        'v84.0',
                        0.17
                    ],
                    [
                        'v83.0',
                        0.21
                    ],
                    [
                        'v81.0',
                        0.1
                    ],
                    [
                        'v80.0',
                        0.16
                    ],
                    [
                        'v79.0',
                        0.43
                    ],
                    [
                        'v78.0',
                        0.11
                    ],
                    [
                        'v76.0',
                        0.16
                    ],
                    [
                        'v75.0',
                        0.15
                    ],
                    [
                        'v72.0',
                        0.14
                    ],
                    [
                        'v70.0',
                        0.11
                    ],
                    [
                        'v69.0',
                        0.13
                    ],
                    [
                        'v56.0',
                        0.12
                    ],
                    [
                        'v49.0',
                        0.17
                    ]
                ]
            },
            {
                name: 'Safari',
                id: 'Safari',
                data: [
                    [
                        'v15.3',
                        0.1
                    ],
                    [
                        'v15.2',
                        2.01
                    ],
                    [
                        'v15.1',
                        2.29
                    ],
                    [
                        'v15.0',
                        0.49
                    ],
                    [
                        'v14.1',
                        2.48
                    ],
                    [
                        'v14.0',
                        0.64
                    ],
                    [
                        'v13.1',
                        1.17
                    ],
                    [
                        'v13.0',
                        0.13
                    ],
                    [
                        'v12.1',
                        0.16
                    ]
                ]
            },
            {
                name: 'Edge',
                id: 'Edge',
                data: [
                    [
                        'v97',
                        6.62
                    ],
                    [
                        'v96',
                        2.55
                    ],
                    [
                        'v95',
                        0.15
                    ]
                ]
            },
            {
                name: 'Firefox',
                id: 'Firefox',
                data: [
                    [
                        'v96.0',
                        4.17
                    ],
                    [
                        'v95.0',
                        3.33
                    ],
                    [
                        'v94.0',
                        0.11
                    ],
                    [
                        'v91.0',
                        0.23
                    ],
                    [
                        'v78.0',
                        0.16
                    ],
                    [
                        'v52.0',
                        0.15
                    ]
                ]
            }
        ]
    }
});

// Data retrieved from https://netmarketshare.com/
// Radialize the colors
Highcharts.setOptions({
    colors: Highcharts.map(Highcharts.getOptions().colors, function (color) {
        return {
            radialGradient: {
                cx: 0.5,
                cy: 0.3,
                r: 0.7
            },
            stops: [
                [0, color],
                [1, Highcharts.color(color).brighten(-0.3).get('rgb')] // darken
            ]
        };
    })
});

// Build the chart
Highcharts.chart('pie-chart3', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'pie gradient chart',
        align: 'center'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                connectorColor: 'silver'
            }
        }
    },
    series: [{
        name: 'Share',
        data: [
            { name: 'Chrome', y: 73.24 },
            { name: 'Edge', y: 12.93 },
            { name: 'Firefox', y: 4.73 },
            { name: 'Safari', y: 2.50 },
            { name: 'Internet Explorer', y: 1.65 },
            { name: 'Other', y: 4.93 }
        ]
    }]
});



var colors = Highcharts.getOptions().colors,
    categories = [
        'Chrome',
        'Safari',
        'Edge',
        'Firefox',
        'Other'
    ],
    data = [
        {
            y: 61.04,
            color: colors[2],
            drilldown: {
                name: 'Chrome',
                categories: [
                    'Chrome v97.0',
                    'Chrome v96.0',
                    'Chrome v95.0',
                    'Chrome v94.0',
                    'Chrome v93.0',
                    'Chrome v92.0',
                    'Chrome v91.0',
                    'Chrome v90.0',
                    'Chrome v89.0',
                    'Chrome v88.0',
                    'Chrome v87.0',
                    'Chrome v86.0',
                    'Chrome v85.0',
                    'Chrome v84.0',
                    'Chrome v83.0',
                    'Chrome v81.0',
                    'Chrome v89.0',
                    'Chrome v79.0',
                    'Chrome v78.0',
                    'Chrome v76.0',
                    'Chrome v75.0',
                    'Chrome v72.0',
                    'Chrome v70.0',
                    'Chrome v69.0',
                    'Chrome v56.0',
                    'Chrome v49.0'
                ],
                data: [
                    36.89,
                    18.16,
                    0.54,
                    0.7,
                    0.8,
                    0.41,
                    0.31,
                    0.13,
                    0.14,
                    0.1,
                    0.35,
                    0.17,
                    0.18,
                    0.17,
                    0.21,
                    0.1,
                    0.16,
                    0.43,
                    0.11,
                    0.16,
                    0.15,
                    0.14,
                    0.11,
                    0.13,
                    0.12
                ]
            }
        },
        {
            y: 9.47,
            color: colors[3],
            drilldown: {
                name: 'Safari',
                categories: [
                    'Safari v15.3',
                    'Safari v15.2',
                    'Safari v15.1',
                    'Safari v15.0',
                    'Safari v14.1',
                    'Safari v14.0',
                    'Safari v13.1',
                    'Safari v13.0',
                    'Safari v12.1'
                ],
                data: [
                    0.1,
                    2.01,
                    2.29,
                    0.49,
                    2.48,
                    0.64,
                    1.17,
                    0.13,
                    0.16
                ]
            }
        },
        {
            y: 9.32,
            color: colors[5],
            drilldown: {
                name: 'Edge',
                categories: [
                    'Edge v97',
                    'Edge v96',
                    'Edge v95'
                ],
                data: [
                    6.62,
                    2.55,
                    0.15
                ]
            }
        },
        {
            y: 8.15,
            color: colors[1],
            drilldown: {
                name: 'Firefox',
                categories: [
                    'Firefox v96.0',
                    'Firefox v95.0',
                    'Firefox v94.0',
                    'Firefox v91.0',
                    'Firefox v78.0',
                    'Firefox v52.0'
                ],
                data: [
                    4.17,
                    3.33,
                    0.11,
                    0.23,
                    0.16,
                    0.15
                ]
            }
        },
        {
            y: 11.02,
            color: colors[6],
            drilldown: {
                name: 'Other',
                categories: [
                    'Other'
                ],
                data: [
                    11.02
                ]
            }
        }
    ],
    browserData = [],
    versionsData = [],
    i,
    j,
    dataLen = data.length,
    drillDataLen,
    brightness;


// Build the data arrays
for (i = 0; i < dataLen; i += 1) {

    // add browser data
    browserData.push({
        name: categories[i],
        y: data[i].y,
        color: data[i].color
    });

    // add version data
    drillDataLen = data[i].drilldown.data.length;
    for (j = 0; j < drillDataLen; j += 1) {
        brightness = 0.2 - (j / drillDataLen) / 5;
        versionsData.push({
            name: data[i].drilldown.categories[j],
            y: data[i].drilldown.data[j],
            color: Highcharts.color(data[i].color).brighten(brightness).get()
        });
    }
}

// Create the chart
Highcharts.chart('pie-donut', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Chart Donut',
        align: 'center'
    },
    subtitle: {
        text: 'Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>',
        align: 'left'
    },
    plotOptions: {
        pie: {
            shadow: false,
            center: ['50%', '50%']
        }
    },
    tooltip: {
        valueSuffix: '%'
    },
    series: [{
        name: 'Browsers',
        data: browserData,
        size: '60%',
        dataLabels: {
            color: '#ffffff',
            distance: -30
        }
    }, {
        name: 'Versions',
        data: versionsData,
        size: '80%',
        innerSize: '60%',
        dataLabels: {
            format: '<b>{point.name}:</b> <span style="opacity: 0.5">{y}%</span>',
            filter: {
                property: 'y',
                operator: '>',
                value: 1
            },
            style: {
                fontWeight: 'normal'
            }
        },
        id: 'versions'
    }],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 400
            },
            chartOptions: {
                series: [{
                }, {
                    id: 'versions',
                    dataLabels: {
                        enabled: false
                    }
                }]
            }
        }]
    }
});

