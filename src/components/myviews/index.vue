<template>
  <div class="index-wrap">
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="grid-content">
          <h2>饼图</h2>
          <canvas id="pie">
          </canvas>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content">
          <h2>曲线图</h2>
          <canvas id="bight">
          </canvas>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Chart from 'chart.js'

export default {
  data () {
    return {
      randomNum (num, max, min) {
        var arr = []
        for (var i = 0; i < num; i++) {
          arr.push(Math.floor(Math.random() * (max - min + 1)) + max)
        }
        return arr
      }
    }
  },
  computed: {
    webNum () {
      return this.randomNum(12, 100000, 1000)
    },
    personNum () {
      return this.randomNum(12, 100000, 1000)
    },
    isMobile () {
      return (window.innerWidth <= 800 && window.innerHeight <= 600)
    }
  },
  methods: {
  },
  mounted () {
    this.$nextTick(() => {
      var Pie = document.getElementById('pie').getContext('2d')
      var pieConfig = {
        type: 'pie',
        data: {
          labels: ['HTML', 'JavaScript', 'CSS'],
          datasets: [{
            data: [56.6, 37.7, 4.1],
            backgroundColor: ['#00a65a', '#f39c12', '#00c0ef'],
            hoverBackgroundColor: ['#00a65a', '#f39c12', '#00c0ef']
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: !this.isMobile,
          legend: {
            position: 'bottom',
            display: true
          }
        }
      }
      new Chart(Pie, pieConfig) // eslint-disable-line no-new

      // qu xian tu
      var Bight = document.getElementById('bight').getContext('2d')
      var bightConfig = {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          datasets: [{
            label: 'rency',
            fill: false,
            borderColor: '#284184',
            pointBackgroundColor: '#284184',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            data: this.webNum
          }, {
            label: 'personNum',
            borderColor: '#4BC0C0',
            pointBackgroundColor: '#4BC0C0',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            data: this.personNum
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: !this.isMobile,
          legend: {
            position: 'bottom',
            display: true
          },
          tooltips: {
            mode: 'label',
            xPadding: 10,
            yPadding: 10,
            bodySpacing: 10
          }
        }
      }
      new Chart(Bight, bightConfig) // eslint-disable-line no-new
    })
  }
}
</script>
<style lang='scss' scoped>
.index-wrap{
  h2{
    text-align: center;
  }

}
</style>
