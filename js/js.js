$(window).load(function () {
  $(".loading").fadeOut();
});
$(function () {
  echarts_1();
  echarts_4();
  echarts_31();
  function echarts_1() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("echart1"));
    var data = [
      {
        title: "**省",
      },
      ["2024届"],
      [
        {
          name: "电科",
          max: 150,
        },
        {
          name: "智科",
          max: 150,
        },
        {
          name: "物联网",
          max: 150,
        },
        {
          name: "通信",
          max: 150,
        },
        {
          name: "电信",
          max: 150,
        },
      ],
      [43, 100, 78, 56, 112],
    ];
    option = {
      color: ["#9DD060", "#35C96E", "#4DCEF8"],

      tooltip: {},

      radar: {
        center: ["50%", "50%"],
        radius: ["25%", "70%"],

        name: {
          textStyle: {
            color: "#72ACD1",
          },
        },

        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.0",

            width: 2,
          },
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,0.2)",
            width: 1,
            type: "dotted",
          },
        },
        splitArea: {
          areaStyle: {
            color: ["rgba(255,255,255,.1)", "rgba(255,255,255,0)"],
          },
        },
        indicator: data[2],
      },
      series: [
        {
          name: "",
          type: "radar",
          data: [
            {
              areaStyle: {
                normal: {
                  opacity: 0.3,
                },
              },
              value: data[3],
              name: data[1][0],
            },
            {
              areaStyle: {
                normal: {
                  opacity: 0.3,
                },
              },
              value: data[4],
              name: data[1][1],
            },
            {
              areaStyle: {
                normal: {
                  opacity: 0.3,
                },
              },
              value: data[5],
              name: data[1][2],
            },
          ],
        },
      ],
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
  function echarts_4() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("echart4"));
    var myChart2 = echarts.init(document.getElementById("echart3"));
    option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      legend: {
        data: ["男", "女"],

        top: "2%",
        textStyle: {
          color: "rgba(255,255,255,.5)",
          fontSize: "12",
        },
        itemWidth: 12,
        itemHeight: 12,
        itemGap: 35,
      },
      grid: {
        left: "0%",
        top: "40px",
        right: "0%",
        bottom: "0%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          data: ["电科", "电信", "智科", "通信", "物联网"],
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(255,255,255,.1)",
              width: 1,
              type: "solid",
            },
          },

          axisTick: {
            show: false,
          },
          axisLabel: {
            interval: 0,
            // rotate:50,
            show: true,
            splitNumber: 15,
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: "14",
            },
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          axisLabel: {
            //formatter: '{value} %'
            show: true,
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: "14",
            },
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(255,255,255,.1	)",
              width: 1,
              type: "solid",
            },
          },
          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)",
            },
          },
        },
      ],
      series: [
        {
          name: "男",
          type: "bar",
          data: [2, 3, 3, 9, 15, 12, 6, 4, 6],
          barWidth: "20%", //柱子宽度
          // barGap: 1, //柱子之间间距
          itemStyle: {
            normal: {
              color: "#2f89cf",
              opacity: 1,
              barBorderRadius: 5,
            },
          },
        },
        {
          name: "女",
          type: "bar",
          data: [1, 4, 5, 11, 12, 9, 5, 6, 5],
          barWidth: "20%",
          // barGap: 1,
          itemStyle: {
            normal: {
              color: "#62c98d",
              opacity: 1,
              barBorderRadius: 5,
            },
          },
        },
      ],
    };
    option2 = {
      //  backgroundColor: '#00265f',
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      legend: {
        data: ["2017年", "2018年"],
        top: "5%",
        textStyle: {
          color: "#fff",
          fontSize: "12",
        },

        itemGap: 35,
      },
      grid: {
        left: "0%",
        top: "40px",
        right: "0%",
        bottom: "0",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          data: ["1月", "2月", "3月", "4月", "5月", "6月"],
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(255,255,255,.1)",
              width: 1,
              type: "solid",
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            interval: 0,
            // rotate:50,
            show: true,
            splitNumber: 5,
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: "12",
            },
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          axisLabel: {
            //formatter: '{value} %'
            show: true,
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: "12",
            },
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(255,255,255,.1	)",
              width: 1,
              type: "solid",
            },
          },
          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)",
            },
          },
        },
      ],
      series: [
        {
          name: "2017年",
          type: "line",
          smooth: true,
          data: [2, 6, 3, 8, 5, 8],

          itemStyle: {
            normal: {
              color: "#2f89cf",
              opacity: 1,

              barBorderRadius: 5,
            },
          },
        },
        {
          name: "2018年",
          type: "line",
          smooth: true,
          data: [5, 2, 6, 4, 5, 12],
          barWidth: "15",
          // barGap: 1,
          itemStyle: {
            normal: {
              color: "#62c98d",
              opacity: 1,
              barBorderRadius: 5,
            },
          },
        },
      ],
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option2);
    myChart2.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
  function echarts_31() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("fb01"));
    var myChart2 = echarts.init(document.getElementById("fb02"));
    var myChart4 = echarts.init(document.getElementById("fb04"));
    var myChart5 = echarts.init(document.getElementById("myd1"));

    var myChart7 = echarts.init(document.getElementById("sysx"));
    option = {
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)",
        position: function (p) {
          //其中p为当前鼠标的位置
          return [p[0] + 10, p[1] - 10];
        },
      },
      legend: {
        orient: "vertical",
        top: "25%",
        right: 0,
        itemWidth: 10,
        itemHeight: 10,
        data: ["20-29岁", "30-39岁", "40-49岁", "50岁以上"],
        textStyle: {
          color: "rgba(255,255,255,.5)",
          fontSize: "12",
        },
      },
      series: [
        {
          name: "年龄分布",
          type: "pie",
          center: ["35%", "50%"],
          radius: ["40%", "50%"],
          color: [
            "#62c98d",
            "#2f89cf",
            "#4cb9cf",
            "#e0c828",
            "#e58c00",
            "#eb295b",
          ],
          label: { show: false },
          labelLine: { show: false },
          data: [
            { value: 4, name: "20-29岁" },
            { value: 2, name: "30-39岁" },
            { value: 2, name: "40-49岁" },
            { value: 1, name: "50岁以上" },
          ],
        },
      ],
    };
    option2 = {
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)",
        position: function (p) {
          //其中p为当前鼠标的位置
          return [p[0] + 10, p[1] - 10];
        },
      },
      legend: {
        orient: "vertical",
        top: "25%",
        right: "8%",
        itemWidth: 10,
        itemHeight: 10,
        data: ["张剑", "闵雷霆", "陈振兴"],
        textStyle: {
          color: "rgba(255,255,255,.5)",
          fontSize: "12",
        },
      },
      series: [
        {
          name: "带班人数",
          type: "pie",
          center: ["40%", "50%"],
          radius: ["40%", "50%"],
          color: [
            "#62c98d",
            "#2f89cf",
            "#4cb9cf",
            "#e0c828",
            "#e58c00",
            "#eb295b",
          ],
          label: { show: false },
          labelLine: { show: false },
          data: [
            { value: 100, name: "张剑" },
            { value: 200, name: "闵雷霆" },
            { value: 300, name: "陈振兴" },
          ],
        },
      ],
    };

    option4 = {
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)",
        position: function (p) {
          //其中p为当前鼠标的位置
          return [p[0] + 10, p[1] - 10];
        },
      },
      legend: {
        orient: "vertical",
        top: "center",
        right: "8%",
        itemWidth: 10,
        itemHeight: 10,
        data: ["电科", "电信", "物联网", "通信", "智科"],
        textStyle: {
          color: "rgba(255,255,255,.5)",
          fontSize: "12",
        },
      },
      series: [
        {
          name: "业务分类",
          type: "pie",
          center: ["40%", "50%"],
          radius: ["40%", "50%"],
          color: [
            "#62c98d",
            "#2f89cf",
            "#4cb9cf",
            "#e0c828",
            "#e58c00",
            "#eb295b",
          ],
          label: { show: false },
          labelLine: { show: false },
          data: [
            { value: 10, name: "电科" },
            { value: 20, name: "电信" },
            { value: 30, name: "物联网" },
            { value: 40, name: "通信" },
            { value: 50, name: "智科" },
          ],
        },
      ],
    };
    option5 = {
      grid: {
        left: "0",
        right: "0",
        top: "10%",
        bottom: "24%",
        //containLabel: true
      },
      legend: {
        data: ["六级", "四级", "四六级"],
        bottom: 0,
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
          color: "#fff",
          fontSize: "10",
        },

        itemGap: 5,
      },
      tooltip: {
        show: "true",
        trigger: "item",
      },
      yAxis: {
        type: "value",
        show: false,
      },
      xAxis: [
        {
          type: "category",
          axisTick: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#363e83",
            },
          },
          axisLabel: {
            show: false,
            //   inside: true,
            textStyle: {
              color: "rgba(255,255,255,1)",
              fontWeight: "normal",
              fontSize: "12",
            },
            // formatter:function(val){
            //     return val.split("").join("\n")
            // },
          },
          data: ["六级"],
        },
      ],
      series: [
        {
          name: "六级",
          type: "bar",
          barWidth: "20",

          itemStyle: {
            normal: {
              show: true,
              color: "#20aa92",
              barBorderRadius: 50,
              borderWidth: 0,
            },
          },
          zlevel: 2,
          barGap: "100%",
          data: [20],
          label: {
            formatter: "{c}人",
            show: true,
            position: "top",
            textStyle: {
              fontSize: 12,
              color: "rgba(255,255,255,.6)",
            },
          },
        },
        {
          name: "四级",
          type: "bar",
          itemStyle: {
            normal: {
              show: true,
              color: "#f4664e",
              barBorderRadius: 50,
              borderWidth: 0,
            },
          },
          zlevel: 2,
          barWidth: "20",
          data: [40],
          label: {
            formatter: "{c}人",
            show: true,
            position: "top",
            textStyle: {
              fontSize: 12,
              color: "rgba(255,255,255,.6)",
            },
          },
        },
        {
          name: "四六级",
          type: "bar",
          itemStyle: {
            normal: {
              show: true,
              color: "#0c93dc",
              barBorderRadius: 50,
              borderWidth: 0,
            },
          },
          zlevel: 2,
          barWidth: "20",
          data: [127],
          label: {
            formatter: "{c}份",
            show: true,
            position: "top",
            textStyle: {
              fontSize: 12,
              color: "rgba(255,255,255,.6)",
            },
          },
        },
      ],
    };

    option7 = {
      //  backgroundColor: '#00265f',
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      grid: {
        left: "0%",
        top: "10px",
        right: "0%",
        bottom: "0",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          data: ["2019届", "2020届", "2021届", "2022届", "2023届", "2024届"],
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(255,255,255,.1)",
              width: 1,
              type: "solid",
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            interval: 0,
            // rotate:50,
            show: true,
            splitNumber: 5,
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: "12",
            },
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          axisLabel: {
            //formatter: '{value} %'
            show: true,
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: "12",
            },
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(255,255,255,.1	)",
              width: 1,
              type: "solid",
            },
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: "rgba(255,255,255,.1)",
            },
          },
        },
      ],
      series: [
        {
          type: "line",
          //smooth: true,
          data: [1000, 1200, 800, 1200, 1400, 1600],

          itemStyle: {
            normal: {
              color: "#2f89cf",
              opacity: 1,

              barBorderRadius: 5,
            },
          },
        },
      ],
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    myChart2.setOption(option2);

    myChart4.setOption(option4);
    myChart5.setOption(option5);

    myChart7.setOption(option7);
    window.addEventListener("resize", function () {
      myChart.resize();
      myChart7.resize();
      myChart2.resize();
      myChart3.resize();
      myChart4.resize();
      myChart5.resize();
    });
  }
});
function rainBg() {
  var c = document.querySelector(".rain");
  var ctx = c.getContext("2d"); //获取canvas上下文
  var w = (c.width = document.querySelector(".mainbox").clientWidth);
  var h = (c.height = document.querySelector(".mainbox").clientHeight);
  //设置canvas宽、高

  function random(min, max) {
    return Math.random() * (max - min) + min;
  }

  function RainDrop() {}
  //雨滴对象 这是绘制雨滴动画的关键
  RainDrop.prototype = {
    init: function () {
      this.x = random(0, w); //雨滴的位置x
      this.y = h; //雨滴的位置y
      this.color = "hsl(180, 100%, 50%)"; //雨滴颜色 长方形的填充色
      this.vy = random(4, 5); //雨滴下落速度
      this.hit = 0; //下落的最大值
      this.size = 2; //长方形宽度
    },
    draw: function () {
      if (this.y > this.hit) {
        var linearGradient = ctx.createLinearGradient(
          this.x,
          this.y,
          this.x,
          this.y + this.size * 30
        );
        // 设置起始颜色
        linearGradient.addColorStop(0, "#14789c");
        // 设置终止颜色
        linearGradient.addColorStop(1, "#fff");
        // 设置填充样式
        ctx.fillStyle = linearGradient;
        ctx.fillRect(this.x, this.y, this.size, this.size * 20); //绘制长方形，通过多次叠加长方形，形成雨滴下落效果
      }
      this.update(); //更新位置
    },
    update: function () {
      if (this.y > this.hit) {
        this.y -= this.vy; //未达到底部，增加雨滴y坐标
      } else {
        this.init();
      }
    },
  };

  function resize() {
    w = c.width = window.innerWidth;
    h = c.height = window.innerHeight;
  }

  //初始化一个雨滴

  var rs = [];
  for (var i = 0; i < 10; i++) {
    setTimeout(function () {
      var r = new RainDrop();
      r.init();
      rs.push(r);
    }, i * 300);
  }

  function anim() {
    ctx.clearRect(0, 0, w, h); //填充背景色，注意不要用clearRect，否则会清空前面的雨滴，导致不能产生叠加的效果
    for (var i = 0; i < rs.length; i++) {
      rs[i].draw(); //绘制雨滴
    }
    requestAnimationFrame(anim); //控制动画帧
  }

  window.addEventListener("resize", resize);
  //启动动画
  anim();
}
rainBg();
