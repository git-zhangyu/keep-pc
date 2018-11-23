<template lang="html">
  <div class="pagination-app">
    <div class="col-md-2"></div>
    <div class="col-md-10">
      <nav aria-label="Page navigation">
        <ul class="pagination" @click="sendCurrPage">
          <li @click="prePage" :class="this.currPage === 1 ? 'disabled ':''" class="page-item disabled">
            <a href="javascript:;" aria-label="Previous" class="page-link">
              <span aria-hidden="true">上一页</span>
            </a>
          </li>
          <li @click="goPage(1)" :class="currPage === 1 ? 'active' : ''">
            <a href="javascript:;" class="page-link">1</a>
          </li>
          <li v-if="beforeEllipsis">
            <a href="javascript:;" class="page-link">...</a>
          </li>
          <li v-for="index in pages" :key="index" :class="index === currPage ? 'active' : ''">
            <a href="javascript:;" @click="goPage(index)" class="page-link">{{index}}</a>
          </li>

          <li v-if="afterEllipsis">
            <a href="javascript:;" class="page-link">...</a>
          </li>
          <li @click="goPage(totalPages)" :class="currPage === totalPages ? 'active' : ''">
            <a href="javascript:;" class="page-link">{{totalPages}}</a>
          </li>
          <li :class="this.currPage === this.totalPages ? 'disabled ':''" @click="nextPage">
            <a href="javascript:;" aria-label="Next" class="page-link">
              <span aria-hidden="true"  >下一页</span>
            </a>
          </li>
          <!--
          <li class="count-page">
            <em>
              &nbsp;共<b>{{totalPages}}</b>页
              &nbsp;到&nbsp;
            </em>
            
            <input type="text" class="form-control" aria-describedby="basic-addon1" v-model="newPage">
            <em>页</em>
            <button href="#" @click="inputPage" class="btn btn-default">确定</button>
          </li>-->
        </ul>
      </nav>
    </div>   
  </div>
</template>

<script>
export default {
  props: {
    totalPages: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      currPage: 1,
      showPages: [],
      beforeEllipsis: true,
      afterEllipsis: false,
      newPage: ''
    }
  },
  watch: {
    // 检查分页输入框内容
    newPage () {
      this.newPage = this.newPage.replace(/\D/g, '')
    },
    // 条件查询，totalPages有变化
    totalPages () {
      this.currPage = 1
    }
  },
  // 计算页面显示的分页数
  computed: {
    pages: function () {
      // arr 存放显示的页数
      let arr = []
      // 大于3 显示...
      if (this.currPage > 3) {
        arr.push(this.currPage - 2)
        arr.push(this.currPage - 1)
        if (this.currPage > 4) {
          this.beforeEllipsis = true
        }
      }
      // 小于3 不显示...
      else {
        this.beforeEllipsis = false
        for (let i = 2; i < this.currPage; i++) {
          arr.push(i)
        }
      }

      // 加入当前页
      if (this.currPage !== 1 && this.currPage !== this.totalPages) {
        arr.push(this.currPage)
      }

      // 比总页数小2
      if (this.currPage < (this.totalPages - 2)) {
        arr.push(this.currPage + 1)
        arr.push(this.currPage + 2)
        // 比总页数小3 显示...
        if (this.currPage < (this.totalPages - 3)) {
          this.afterEllipsis = true
        }
      }
      // 比总页数小 1 或 2， 不显示...
      else {
        this.afterEllipsis = false
        for (let i = (this.currPage + 1); i < this.totalPages; i++) {
          arr.push(i)
        }
      }
      // console.log('当前页: ', this.currPage, '总页数: ', arr)
      return arr
    }
  },
  methods: {
    prePage () {
      if (this.currPage <= 1) {
        this.currPage = 1
      } else {
        this.currPage--
      }
    },
    nextPage () {
      if (this.currPage >= this.totalPages) {
        this.currPage = this.totalPages
      } else {
        this.currPage++
      }
    },
    goPage (index) {
      if (this.currPage !== index) {
        this.currPage = index
      }
    },
    // 输入框跳转分页
    inputPage () {
      if (parseInt(this.newPage) > this.totalPages) {
        this.currPage = this.totalPages
      } else if(parseInt(this.newPage) === 0){
        this.currPage = 1
      } else {
        this.currPage = parseInt(this.newPage)
      }
      this.newPage = this.currPage.toString()
    },
    // 向父类发送当前页
    sendCurrPage () {
      this.$emit('sendCurrPage', this.currPage)
    }
  }
}
</script>

<style lang="css">
.pagination-app{
  margin-top:20px;
  margin-right:20px;
}
.pagination {
  width:100%;
}
.count-page .form-control {
  width:40px;
  display: inline-block;
}
em {
  font-style: normal
}
</style>
