<template>
  <div>
    <div class="row my-3">
      <div class="col-md-12 text-center">
        <div class="site-block-27" aria-label="Page navigation">
          <ul class="pagination font-weight-bold justify-content-center">
            <li class="page-item" :class="{'disabled':!pages.has_pre}">
              <a class="page-link"  @click.prevent="changePagination(pages.current_page - 1)">&lt;</a>
            </li>
            <li class="page-item" v-for="page in pages.total_pages" :key="page" :class="{'active':pages.current_page===page}" @click.prevent="changePagination(page)">
              <span class="page-link" >{{page}}</span>
            </li>
            <li class="page-item" :class="{'disabled':!pages.has_next}">
              <a class="page-link"  @click.prevent="changePagination(pages.current_page + 1)">&gt;</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pages',
  props:{
    pages:{
      type: Object,
    }
  },
  methods: {
    changePagination(page){
      this.$emit('changeCurrentPage',page)
    }
  },
}
</script>

<style lang="scss" scoped>
  .page-item:first-child .page-link{
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
  }
  .page-item:last-child .page-link{
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
  }
  .page-link{
    padding: inherit;
  }
</style>