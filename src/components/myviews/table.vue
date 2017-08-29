<template>
  <div class="table-wrap" v-if= "response" >
    <el-table :data="response" border style="width: 100%">
      <el-table-column prop="name" label="名称" >
      </el-table-column>
      <el-table-column prop="stargazers_count" label="星星数量" >
      </el-table-column>
      <el-table-column prop="forks" label="被复刻" >
      </el-table-column>
      <el-table-columnprop="full_name" label="全名" >
      </el-table-column>
      <el-table-column prop="html_url" label="地址" >
      </el-table-column>
      <el-table-column prop="watchers" label="关注者数量" >
      </el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <el-button type="text" @click="Edit(scope.row)" size="small">编辑</el-button>
          <el-button type="text" @click="Del(scope.row.id)" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- <el-row type="flex" justify="center">
        <el-col :span="12">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="response.currentPage"
            :page-sizes="[10, 20, 50, 100]"
            :page-size="response.pageSize"
            :total="response.count"
            layout="total, sizes, prev, pager, next, jumper">
          </el-pagination>
        </el-col>
      </el-row>    -->
      <!-- // Edit -->
      <el-dialog title="编辑" v-model="dialogShow">
        <el-form :model="rData" :inline = true :label-width="labelWidth"> 
          <el-form-item label="名称" >
            <el-input v-model="rData.name"></el-input>
          </el-form-item>
          <el-form-item label="星星数量" >
            <el-input v-model="rData.stargazers_count"></el-input>
          </el-form-item>
          <el-form-item label="被复刻" >
            <el-input v-model="rData.forks"></el-input>
          </el-form-item>
          <el-form-item label="全名" >
            <el-input v-model="rData.full_name"></el-input>
          </el-form-item>
          <el-form-item label="地址" >
            <el-input v-model="rData.html_url"></el-input>
          </el-form-item>
          <el-form-item label="关注者数量" >
            <el-input v-model="rData.watchers"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogShow = false">取 消</el-button>
          <el-button type="primary" @click="editSub">确 定</el-button>
        </div>
      </el-dialog>
  </div>  
</template>


<script>
import axios from 'axios'

export default {
  data () {
    return {
      githubUrl: 'https://api.github.com/search/repositories?q=language%3Ajavascript&sort=stars',
      response: null,
      dialogShow: false,
      labelWidth: '100px',
      rData: {
        name: '',
        stargazers_count: '',
        forks: '',
        full_name: '',
        html_url: '',
        watchers: ''
      }
    }
  },
  methods: {
    getList () {
      axios.get(this.githubUrl)
        .then(response => {
          console.log(response, 123)
          if (response.status === 200) {
            this.response = response.data.items
          }
        })
    },
    Edit (row) {
      this.dialogShow = true
      this.rData = row
    },
    editSub () {
      this.$message('保存中！请稍等')
      this.dialogShow = false
    },
    Del (id) {
      console.log(id)
      const data = {
        val: '45',
        ...this.rData
      }
      console.log(data)
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  },
  mounted () {
    this.getList()
  }
}
</script>

<style lang="scss" scoped>

</style>

