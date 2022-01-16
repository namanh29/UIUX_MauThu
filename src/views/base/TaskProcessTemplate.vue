<template>
  <CCard class="mb-4">
    <CCardHeader>
      <strong>Mẫu công việc</strong>
    </CCardHeader>
    <CCardBody>
      <div class="header-page">
        <div class="filter-left">
          <div class="input-label mr-1">
            <CFormLabel for="template-name">Tên mẫu</CFormLabel>
            <CFormInput
              id="template-name"
              type="text"
              placeholder="Tìm kiếm theo tên"
            />
          </div>
          <div><CButton color="success"> Tìm kiếm </CButton></div>
        </div>
        <div wrap-button>
          <CButton class="mr-1" color="success">
            <CIcon icon="cil-plus" /> Thêm mới
          </CButton>
          <CButton color="primary">
            <CIcon class="icon-button" icon="cil-file" />Xuất báo cáo
          </CButton>
        </div>
      </div>

      <CTable hover striped>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">
              Tên mẫu công việc
              <CIcon icon="cilFilter" />
            </CTableHeaderCell>
            <CTableHeaderCell scope="col">
              Mô tả
              <CIcon icon="cilFilter" />
            </CTableHeaderCell>
            <CTableHeaderCell scope="col">
              Số lượng công việc
              <CIcon icon="cilFilter" />
            </CTableHeaderCell>
            <CTableHeaderCell scope="col">
              Người quản lý
              <CIcon icon="cilFilter" />
            </CTableHeaderCell>
            <CTableHeaderCell scope="col">
              Người tạo mẫu
              <CIcon icon="cilFilter" />
            </CTableHeaderCell>

            <CTableHeaderCell scope="col">Hành động</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow>
            <CTableHeaderCell scope="row">Quy trình nhập kho</CTableHeaderCell>
            <CTableDataCell>Các quy tắc nhập kho</CTableDataCell>
            <CTableDataCell>1</CTableDataCell>
            <CTableDataCell>Phạm Nam Anh</CTableDataCell>
            <CTableDataCell>Phạm Nam Anh</CTableDataCell>
            <CTableDataCell align="middle">
              <CButton
                size="sm"
                color="primary"
                @click="
                  () => {
                    showDetail = true
                  }
                "
                >Xem chi tiết</CButton
              >
              <CButton class="ml-0-5" size="sm" color="success"
                >Tạo công việc</CButton
              >
            </CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">Quy trình nhập kho</CTableHeaderCell>
            <CTableDataCell>Các quy tắc nhập kho</CTableDataCell>
            <CTableDataCell>1</CTableDataCell>
            <CTableDataCell>Phạm Nam Anh</CTableDataCell>
            <CTableDataCell>Phạm Nam Anh</CTableDataCell>
            <CTableDataCell>
              <CButton
                size="sm"
                color="primary"
                @click="
                  () => {
                    showDetail = true
                  }
                "
                >Xem chi tiết</CButton
              >
              <CButton class="ml-0-5" size="sm" color="success"
                >Tạo công việc</CButton
              >
            </CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
      <div class="pagination">
        <div class="number-page">
          <CFormLabel style="margin-right: 5px">Số dòng/trang</CFormLabel>
          <CFormSelect size="sm" aria-label="Default select example">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">50</option>
          </CFormSelect>
        </div>
        <CPagination aria-label="Page navigation example">
          <CPaginationItem href="/#/task-process-template"
            >Previous</CPaginationItem
          >
          <CPaginationItem href="/#/task-process-template">1</CPaginationItem>
          <CPaginationItem href="/#/task-process-template">2</CPaginationItem>
          <CPaginationItem href="/#/task-process-template">3</CPaginationItem>
          <CPaginationItem href="/#/task-process-template"
            >Next</CPaginationItem
          >
        </CPagination>
      </div>
    </CCardBody>
  </CCard>
  <CModal
    size="xl"
    :visible="showDetail"
    @close="
      () => {
        showDetail = false
      }
    "
  >
    <CModalHeader>
      <CModalTitle>Xem mẫu quy trình công việc</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <CRow>
        <CCol class="description-box">
          <h5>Thông tin quy trình</h5>
          <div><span>Tên quy trình: </span>Quy trình nhập kho</div>
          <div><span>Mô tả quy trình: </span>Các quy tắc nhập kho</div>
          <div><span>Người được xem: </span></div>
          <ul>
            <li>Phạm Nam Anh</li>
          </ul>
          <div><span>Người quản lý: </span></div>
          <ul>
            <li>Phạm Nam Anh</li>
          </ul>
        </CCol>
        <CCol class="description-box">
          <h5>Quy trình công việc</h5>
        </CCol>
      </CRow>
    </CModalBody>
    <CModalFooter>
      <CButton
        color="danger"
        @click="
          () => {
            showDetail = false
          }
        "
        >Close</CButton
      >
    </CModalFooter>
  </CModal>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'TaskProcessTemplate',
  setup() {
    const activeKey = ref(1)
    const flushActiveKey = ref(1)

    return {
      activeKey,
      flushActiveKey,
    }
  },
  data() {
    return {
      showDetail: false,
    }
  },
}
</script>

<style scoped>
.header-page {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 2em;
}
.wrap-button {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1em;
}
.pagination {
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
  margin-top: 2em;
  align-items: center;
}
.number-page {
  display: flex;
  white-space: nowrap;
  align-items: center;
  margin-bottom: 0.8em;
}
.filter-left {
  display: flex;
  align-items: flex-end;
}
.input-label {
  white-space: nowrap;
  align-items: center;
}
.mr-1 {
  margin-right: 1em;
}
.ml-0-5 {
  margin-left: 0.5em;
}
.description-box {
  background-color: #fff;
  box-shadow: none;
  border: 1px solid #f4f4f4;
  padding: 8px 15px 15px 15px;
  margin-top: 10px;
  margin-bottom: 10px;
  word-break: break-word;
  line-height: 2em;
}
div > span {
  font-weight: 600;
}
.icon-button {
  margin-right: 8px;
}
</style>
