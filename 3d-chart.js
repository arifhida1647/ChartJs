// Data retrieved from https://yearbook.enerdata.net/electricity/world-electricity-production-statistics.html
Highcharts.chart('3d-bar', {
    chart: {
        type: 'column',
        options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            viewDistance: 25,
            depth: 40
        }
    },

    title: {
        text: '3D column with stacking and grouping',
        align: 'center'
    },

    xAxis: {
        labels: {
            skew3d: true,
            style: {
                fontSize: '16px'
            }
        }
    },

    yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
            text: 'TWh',
            skew3d: true,
            style: {
                fontSize: '16px'
            }
        }
    },

    tooltip: {
        headerFormat: '<b>{point.key}</b><br>',
        pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} / {point.stackTotal}'
    },

    plotOptions: {
        series: {
            pointStart: 2016
        },
        column: {
            stacking: 'normal',
            depth: 40
        }
    },

    series: [{
        name: 'South Korea',
        data: [563, 567, 590, 582, 571],
        stack: 'Asia'
    }, {
        name: 'Germany',
        data: [650, 654, 643, 612, 572],
        stack: 'Europe'
    }, {
        name: 'Saudi Arabia',
        data: [368, 378, 378, 367, 363],
        stack: 'Asia'
    }, {
        name: 'France',
        data: [564, 562, 582, 571, 533],
        stack: 'Europe'
    }]
});

// Data retrieved from https://olympics.com/en/olympic-games/beijing-2022/medals
Highcharts.chart('3d-pie', {
    chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45
        }
    },
    title: {
        text: '3D CHART DONUT',
        align: 'center'
    },
    plotOptions: {
        pie: {
            innerSize: 100,
            depth: 45
        }
    },
    series: [{
        name: 'Medals',
        data: [
            ['Norway', 16],
            ['Germany', 12],
            ['USA', 8],
            ['Sweden', 8],
            ['Netherlands', 8],
            ['ROC', 6],
            ['Austria', 7],
            ['Canada', 4],
            ['Japan', 3]

        ]
    }]
});

Highcharts.chart('3d-cylinder', {
    chart: {
        type: 'cylinder',
        options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            depth: 50,
            viewDistance: 25
        }
    },
    title: {
        text: '3D CHART CYLINDER'
    },
    subtitle: {
        text: 'Source: ' +
            '<a href="https://www.fhi.no/en/id/infectious-diseases/coronavirus/daily-reports/daily-reports-COVID19/"' +
            'target="_blank">FHI</a>'
    },
    xAxis: {
        categories: ['0-9', '10-19', '20-29', '30-39', '40-49', '50-59', '60-69', '70-79', '80-89', '90+'],
        title: {
            text: 'Age groups'
        }
    },
    yAxis: {
        title: {
            margin: 20,
            text: 'Reported cases'
        }
    },
    tooltip: {
        headerFormat: '<b>Age: {point.x}</b><br>'
    },
    plotOptions: {
        series: {
            depth: 25,
            colorByPoint: true
        }
    },
    series: [{
        data: [95321, 169339, 121105, 136046, 106800, 58041, 26766, 14291,
            7065, 3283],
        name: 'Cases',
        showInLegend: false
    }]
});

// Set up the chart
const chart = new Highcharts.Chart({
    chart: {
        renderTo: '3d-column',
        type: 'column',
        options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            depth: 50,
            viewDistance: 25
        }
    },
    xAxis: {
        categories: ['Toyota', 'BMW', 'Volvo', 'Audi', 'Peugeot', 'Mercedes-Benz',
            'Volkswagen', 'Polestar', 'Kia', 'Nissan']
    },
    yAxis: {
        title: {
            enabled: false
        }
    },
    tooltip: {
        headerFormat: '<b>{point.key}</b><br>',
        pointFormat: 'Cars sold: {point.y}'
    },
    title: {
        text: '3D CHART COLUMN',
        align: 'center'
    },
    subtitle: {
        text: 'Source: ' +
            '<a href="https://ofv.no/registreringsstatistikk"' +
            'target="_blank">OFV</a>',
        align: 'left'
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        column: {
            depth: 25
        }
    },
    series: [{
        data: [1318, 1073, 1060, 813, 775, 745, 537, 444, 416, 395],
        colorByPoint: true
    }]
});

function showValues() {
    document.getElementById('alpha-value').innerHTML = chart.options.chart.options3d.alpha;
    document.getElementById('beta-value').innerHTML = chart.options.chart.options3d.beta;
    document.getElementById('depth-value').innerHTML = chart.options.chart.options3d.depth;
}

// Activate the sliders
document.querySelectorAll('#sliders input').forEach(input => input.addEventListener('input', e => {
    chart.options.chart.options3d[e.target.id] = parseFloat(e.target.value);
    showValues();
    chart.redraw(false);
}));

showValues();
