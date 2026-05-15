/* ============================================
   charts.js — Chart.js definitions for
   impacts.html and pathway.html
   ============================================ */

(function () {
  'use strict';

  const GREEN = '#5ed08b';
  const GREEN_DEEP = '#2fb36c';
  const GREEN_SOFT = 'rgba(94, 208, 139, 0.28)';
  const WHITE = '#ffffff';
  const MUTED = '#9fb2c8';
  const GRID = 'rgba(255, 255, 255, 0.08)';

  const axisTitle = {
    color: WHITE,
    font: { family: 'Inter, sans-serif', size: 13, weight: '600' }
  };

  const axisTicks = {
    color: MUTED,
    font: { family: 'Inter, sans-serif', size: 12 }
  };

  const commonPlugins = {
    legend: {
      labels: {
        color: WHITE,
        font: { family: 'Inter, sans-serif' }
      }
    }
  };

  const impactsCanvas = document.getElementById('nitrateChart');
  if (impactsCanvas) {
    new Chart(impactsCanvas, {
      type: 'bar',
      data: {
        labels: ['Soil water', 'Runoff', 'Stream', 'Lake', 'Well water'],
        datasets: [{
          label: 'Nitrate-N (mg/L)',
          data: [4.0, 11.0, 8.0, 6.0, 12.0],
          backgroundColor: [
            'rgba(94, 208, 139, 0.35)',
            'rgba(94, 208, 139, 0.48)',
            'rgba(94, 208, 139, 0.58)',
            'rgba(94, 208, 139, 0.72)',
            'rgba(94, 208, 139, 0.9)'
          ],
          borderColor: GREEN_DEEP,
          borderWidth: 2,
          borderRadius: 8,
          maxBarThickness: 64
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          ...commonPlugins,
          tooltip: {
            callbacks: {
              label(context) {
                return 'Nitrate-N: ' + context.parsed.y + ' mg/L';
              }
            }
          }
        },
        scales: {
          x: {
            ticks: axisTicks,
            grid: { color: 'transparent' },
            title: { display: true, text: 'Environmental compartment', ...axisTitle }
          },
          y: {
            ticks: axisTicks,
            grid: { color: GRID },
            title: { display: true, text: 'Nitrate-nitrogen (mg/L)', ...axisTitle },
            beginAtZero: true
          }
        }
      }
    });
  }

  const pathwayCanvas = document.getElementById('pathwayChart');
  if (pathwayCanvas) {
    new Chart(pathwayCanvas, {
      data: {
        labels: [
          'Fertilized Field',
          'Rainfall / Irrigation',
          'Drainage Ditch',
          'Stream / River',
          'Lake / Reservoir',
          'Algal Bloom',
          'Fish & Human Exposure'
        ],
        datasets: [
          {
            type: 'line',
            label: 'Nitrate-N (mg/L)',
            data: [4.0, 11.0, 10.0, 8.0, 6.0, 3.0, 12.0],
            borderColor: GREEN,
            backgroundColor: GREEN_SOFT,
            fill: true,
            tension: 0.35,
            pointBackgroundColor: WHITE,
            pointBorderColor: GREEN,
            pointBorderWidth: 2,
            pointRadius: 5,
            pointHoverRadius: 8,
            yAxisID: 'y'
          },
          {
            type: 'line',
            label: 'Dissolved oxygen (mg/L)',
            data: [9.0, 8.5, 8.0, 7.2, 5.8, 3.0, 2.5],
            borderColor: '#7dd3fc',
            backgroundColor: 'rgba(125, 211, 252, 0.12)',
            fill: false,
            tension: 0.35,
            pointBackgroundColor: WHITE,
            pointBorderColor: '#7dd3fc',
            pointBorderWidth: 2,
            pointRadius: 5,
            pointHoverRadius: 8,
            yAxisID: 'y1'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          ...commonPlugins,
          tooltip: {
            callbacks: {
              label(context) {
                return context.dataset.label + ': ' + context.parsed.y + ' mg/L';
              }
            }
          }
        },
        scales: {
          x: {
            ticks: axisTicks,
            grid: { color: 'transparent' },
            title: { display: true, text: 'Contamination stage', ...axisTitle }
          },
          y: {
            position: 'left',
            ticks: axisTicks,
            grid: { color: GRID },
            title: { display: true, text: 'Nitrate-nitrogen (mg/L)', ...axisTitle },
            beginAtZero: true
          },
          y1: {
            position: 'right',
            ticks: axisTicks,
            grid: { drawOnChartArea: false },
            title: { display: true, text: 'Dissolved oxygen (mg/L)', ...axisTitle },
            beginAtZero: true
          }
        }
      }
    });
  }
})();
