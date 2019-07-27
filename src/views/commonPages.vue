<template>
  <div>
<!--    <div style="margin-top: 40px;">-->
<!--      <Form ref="searchOption" :label-width='120' :model="searchOption">-->
<!--        <table border="0" cellpadding="0" cellspacing="0" style="width: 100%;">-->
<!--          <tr>-->
<!--            <td style="width: 33%" v-for="item in searchOption">-->
<!--              <template v-if="item.type=='text'">-->
<!--                <FormItem :label=`${item.name}:` :prop=`${item.model}`>-->
<!--                  <Input type="text" v-model.trim="searchOption[item.model]" :maxlength="maxlength"></Input>-->
<!--                </FormItem>-->
<!--              </template>-->
<!--              <template v-if="item.type=='select'">-->
<!--                <FormItem :label=`${item.name}:` :prop=`${item.model}`>-->
<!--                  <Select v-model="searchOption[item.model]" style="width:100%;">-->
<!--                    <Option v-for="it in item.options" :placeholder=`请选择${item.name}`-->
<!--                            :value="it.index" :key="it.index">{{ it.name }}-->
<!--                    </Option>-->
<!--                  </Select>-->
<!--                </FormItem>-->
<!--              </template>-->
<!--              <template v-if="item.type=='DatePicker'">-->
<!--                <FormItem :label=`${item.name}:` :prop=`${item.model}`>-->
<!--                  <DatePicker type="date" style="width:100%;" v-model="searchOption[item.model]"></DatePicker>-->
<!--                </FormItem>-->
<!--              </template>-->
<!--            </td>-->
<!--            <td style="width: 33%">-->
<!--              <FormItem>-->
<!--                <Button type="primary" @click="search">查询</Button>-->
<!--                <Button html-type="reset" class="btnMargin" @click="reset">重置</Button>-->
<!--              </FormItem>-->
<!--            </td>-->
<!--          </tr>-->
<!--        </table>-->
<!--      </Form>-->
<!--    </div>-->
<!--    <Table border stripe :columns="columns" :data="data" :height="tableHeight"></Table>-->
<!--    <div class="page">-->
<!--      <Page show-sizer show-total :total="totalCount" :current="currPage" :pageSize="pageSize"-->
<!--            @on-change="pageChange" @on-page-size-change="pageSizeChange"></Page>-->
<!--    </div>-->
  </div>
</template>

<script>
  import util from '@/libs/util.js';

  export default {
    name: "commonPages",
    // props: {
    //   url: String,
    //   maxlength: {
    //     type: Number,
    //     default: 30
    //   },
    //   column,
    // },
    // data() {
    //   return {
    //     searchOption: [
    //       {type: 'text', name: '建设单位', model: 'jsdw'},
    //       {type: 'select', name: '招标类型', model: 'zblx', options: this.$enums.ZBLXEnums.getOptionList()},
    //       {type: 'DatePicker', name: '提交时间', model: 'tjsj'},
    //     ],
    //     columns: [
    //       {title: '序号', width: 70, align: 'center', type: 'index', sortable: true, fixed: 'left'},
    //     ],
    //     data: [],
    //     tableHeight: '',
    //     pageSize: 10,
    //     totalCount: 0,
    //     currPage: 1,
    //   }
    // },
    // methods: {
    //   pageChange(value) {
    //     this.currPage = value;
    //     this.showData(this.url);
    //   },
    //   pageSizeChange(value) {
    //     this.pageSize = value;
    //     this.currPage = 1;
    //     this.showData(this.url);
    //   },
    //   search() {
    //     this.showData(this.url);
    //   },
    //   reset() {
    //     this.$refs.searchOption.resetFields();
    //     this.currPage = 1;
    //     this.showData(this.url);
    //   },
    //   showData() {
    //     if (!this.url) {
    //       return;
    //     }
    //     let obj = {};
    //     this.$ajax({
    //       url: this.$ajax.adornMergeUrl(`/zbba/${this.url}`, 'b0701'),
    //       method: 'GET',
    //       params: util.addObj(obj)
    //     }).then(response => {
    //       if (response.data.code == 200) {
    //         if (response.data.page.list.length > 0) {
    //           this.data = response.data.page.list;
    //         } else {
    //           this.data = [];
    //         }
    //         this.pageSize = response.data.page.pageSize;
    //         this.totalCount = response.data.page.totalCount;
    //         this.totalPage = response.data.page.totalPage;
    //         this.currPage = response.data.page.currPage;
    //       }
    //     }).catch((err) => {
    //       console.log(err);
    //     });
    //   }
    // },
    // created() {
    //   this.columns.push(this.column);
    //   this.showData(this.url);
    // },
    // mounted() {
    //   this.tableHeight = (this.pageSize + 1) * 48;
    // }
  }
</script>

<style scoped>

</style>
