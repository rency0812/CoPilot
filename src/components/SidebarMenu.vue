<template>
  <ul class="sidebar-menu">
    <li class="header">工具</li>
    <li class="active pageLink" v-on:click="toggleMenu">
      <router-link to="/"><i class="fa fa-desktop"></i>
        <span class="page">首页</span>
      </router-link>
    </li>
    <li class="pageLink" v-on:click="toggleMenu">
      <router-link to="/tables"><i class="fa fa-table"></i>
        <span class="page">表格</span>
      </router-link>
    </li>

    <li class="header">我的</li>
    <li class="pageLink" v-on:click="toggleMenu">
      <router-link to="/tasks">
        <i class="fa fa-tasks"></i>
        <span class="page">任务</span>
      </router-link>
    </li>
    <li class="pageLink" v-on:click="toggleMenu">
      <router-link to="/setting">
        <i class="fa fa-cog"></i>
        <span class="page">设置</span>
      </router-link>
    </li>
    <li class="treeview">
      <a href="#">
        <i class="fa fa-folder-o"></i>
        <span>文件</span>
        <span class="pull-right-container">
          <i class="fa fa-angle-left fa-fw pull-right"></i>
        </span>
      </a>
      <ul class="treeview-menu">
        <li>
          <a href="#">
            <i class="fa fa-file-word-o"></i> 项目 1
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-file-picture-o"></i> 项目 2
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-file-pdf-o"></i> 项目 3
          </a>
        </li>
      </ul>
    </li>

    <li class="header">日志</li>
    <li class="pageLink" v-on:click="toggleMenu">
      <router-link to="/access"><i class="fa fa-book"></i>
        <span class="page">Leaflet地图</span>
      </router-link>
    </li>
    <li class="pageLink" v-on:click="toggleMenu">
      <router-link to="/server"><i class="fa fa-hdd-o"></i>
        <span class="page">服务</span>
      </router-link>
    </li>
    <li class="pageLink" v-on:click="toggleMenu">
      <router-link to="/repos"><i class="fa fa-heart"></i>
        <span class="page">什么鬼</span>
        <small class="label pull-right bg-green">AJAX</small>
      </router-link>
    </li>

    <li class="header">其他</li>
    <li class="pageLink" v-on:click="toggleMenu">
      <router-link to="/login">
        <i class="fa fa-circle-o text-yellow"></i>
        <span class="page"> 登陆</span>
      </router-link>
    </li>
    <li class="pageLink" v-on:click="toggleMenu">
      <router-link to="/404"><i class="fa fa-circle-o text-red"></i>
        <span class="page"> 404</span>
      </router-link>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'SidebarName',
  methods: {
    toggleMenu (event) {
      // remove active from li
      var active = document.querySelector('li.pageLink.active')

      if (active) {
        active.classList.remove('active')
      }
      // window.$('li.pageLink.active').removeClass('active')
      // Add it to the item that was clicked
      event.toElement.parentElement.className = 'pageLink active'
    }
  }
}
</script>
<style>
  /* override default */
  .sidebar-menu>li>a {
    padding: 12px 15px 12px 15px;
  }

  .sidebar-menu li.active>a>.fa-angle-left, .sidebar-menu li.active>a>.pull-right-container>.fa-angle-left {
    animation-name: rotate;
    animation-duration: .2s;
    animation-fill-mode: forwards;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(-90deg);
    }
  }
</style>
