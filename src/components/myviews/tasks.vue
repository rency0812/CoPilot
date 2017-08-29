<template>
  <div id="task">
    <input id="txt" type="text" @keydown.enter="addTask" v-model="task.content" autofocus="autofocus" placeholder="请输入任务回车添加">
    <div class="task-list">
      <div class="list-box" v-for="(item, index) in list">
        <input type="checkbox" @click="changeState(index)" :checked = "item.finished">
        <span :class=" {'finish':item.finished} ">{{ item.content }}</span>
        <button type="button" @click="delTask" class="del">删除</button>
      </div>
      <em v-if="list.length === 0" class="empty">暂无任务</em>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      task: {
        content: '',
        finished: false,
        deleted: false
      },
      list: [
        {content: '就像这样子'},
        {content: '你可以添加你自己的日常'},
        {content: '完成的就干掉它', finished: true}
      ]
    }
  },
  methods: {
    addTask () {
      this.list.push(this.task)
      console.log(this.list)
      this.task = {
        content: '',
        finished: false,
        deleted: false
      }
    },
    changeState (index) {
      let curState = this.list[index].finished
      this.list[index].finished = !curState
    },
    delTask (index) {
      this.list.splice(index, 1)
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
  #task{
    #txt{
      display: block;
      margin: 30px auto;
      width: 300px;
      height: 36px;
      line-height: 36px;
      box-sizing: border-box;
      padding-left: 4px;
      border-radius: 6px;
      border: 1px solid #ccc;
      outline: 0;
      box-shadow: 0 0 5px #ccc;
    }
    .task-list{
      margin:0 auto;
      width: 300px;
      .list-box{
        position: relative;
        padding: 8px 0;
        font-size: 20px;
        border-bottom: 1px solid #efefef;
        &:last-child{
          border-bottom: 0;
        }
        .finish{
          text-decoration: line-through;
          color: #ccc;
        }
        .del{
          position: absolute;
          right: 0;
          background: red;
          text-decoration: none;
          font-size: 14px;
          border: 0;
          outline: 0;
          padding: 2px 6px;
          border-radius: 5px;
          color: #fff;

        }
      }
      .empty{
        display: block;
        font-size: 14px;
        color: #008000;
        text-align: center;
        padding: 12px 0;
      }
    }
  }
</style>
