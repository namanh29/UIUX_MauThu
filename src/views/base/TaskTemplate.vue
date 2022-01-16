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
          <div class="input-label mr-1">
            <CFormLabel>Đơn vị quản lý công việc</CFormLabel>
            <CFormSelect aria-label="Default select example">
              <option>Chọn tất cả đơn vị</option>
              <option value="1">UIUX-08</option>
              <option value="2">Chi nhánh miền nam</option>
              <option value="3">Phòng kế toán</option>
            </CFormSelect>
          </div>
          <div><CButton color="success"> Tìm kiếm </CButton></div>
        </div>
        <div class="wrap-button">
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
              Số lần sử dụng
              <CIcon icon="cilFilter" />
            </CTableHeaderCell>
            <CTableHeaderCell scope="col">
              Người tạo mẫu
              <CIcon icon="cilFilter" />
            </CTableHeaderCell>
            <CTableHeaderCell scope="col">
              Đơn vị quản lý công việc
              <CIcon icon="cilFilter" />
            </CTableHeaderCell>
            <CTableHeaderCell scope="col">Hành động</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow>
            <CTableHeaderCell scope="row">Mẫu 1</CTableHeaderCell>
            <CTableDataCell>Mô tả 1</CTableDataCell>
            <CTableDataCell>1</CTableDataCell>
            <CTableDataCell>Nam Anh</CTableDataCell>
            <CTableDataCell>Chi nhánh miền nam</CTableDataCell>
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
              <CButton class="ml-0-5" size="sm" color="warning"
                >Chỉnh sửa</CButton
              >
              <CButton
                class="ml-0-5"
                size="sm"
                color="danger"
                @click="
                  () => {
                    showDelete = true
                  }
                "
                >Xóa</CButton
              >
            </CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">Mẫu 1</CTableHeaderCell>
            <CTableDataCell>Mô tả 1</CTableDataCell>
            <CTableDataCell>1</CTableDataCell>
            <CTableDataCell>Nam Anh</CTableDataCell>
            <CTableDataCell>Chi nhánh miền nam</CTableDataCell>
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
              <CButton class="ml-0-5" size="sm" color="warning"
                >Chỉnh sửa</CButton
              >
              <CButton
                class="ml-0-5"
                size="sm"
                color="danger"
                @click="
                  () => {
                    showDelete = true
                  }
                "
                >Xóa</CButton
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
          <CPaginationItem href="/#/task-template">Previous</CPaginationItem>
          <CPaginationItem href="/#/task-template">1</CPaginationItem>
          <CPaginationItem href="/#/task-template">2</CPaginationItem>
          <CPaginationItem href="/#/task-template">3</CPaginationItem>
          <CPaginationItem href="/#/task-template">Next</CPaginationItem>
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
      <CModalTitle>Mẫu test</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <CRow>
        <CCol class="description-box">
          <h5>Thông tin chung</h5>
          <div><span>Đơn vị quản lý công việc: </span>CHI NHÁNH MIỀN NAM</div>
          <div><span>Đơn vị phối hợp thực hiện: </span>CHI NHÁNH MIỀN NAM</div>
          <div><span>Mô tả: </span>Mô tả 1</div>
          <div><span>Độ ưu tiên: </span>Tiêu chuẩn</div>
          <div><span>Công thức tính điểm tự động: </span></div>
        </CCol>
        <CCol class="description-box">
          <h5>Các vai trò</h5>
          <div><span>Người được xem: </span></div>
          <ul>
            <li>Phạm Nam Anh</li>
          </ul>
          <div><span>Người thực hiện: </span></div>
          <ul>
            <li>Phạm Nam Anh</li>
          </ul>
          <div><span>Người phê duyệt: </span></div>
          <ul>
            <li>Phạm Nam Anh</li>
          </ul>
        </CCol>
      </CRow>
      <CRow>
        <CCol class="description-box">
          <h5>Danh sách hoạt động</h5>
          <div><span>Hoạt động 1: </span></div>
          <div><span>Hoạt động 2: </span></div>
        </CCol>
        <CCol class="description-box">
          <h5>Danh sách thông tin</h5>
          <div><span>Thông tin 1: </span></div>
          <div><span>Thông tin 2: </span></div>
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
  <CModal size="sm" :visible="showDelete" alignment="center">
    <CModalBody>
      <CModalTitle style="text-align: center"
        >Bạn có chắc chắn muốn xóa mẫu công việc này?</CModalTitle
      >
    </CModalBody>
    <CModalFooter>
      <CButton
        color="secondary"
        @click="
          () => {
            showDelete = false
          }
        "
        >Hủy</CButton
      >
      <CButton
        color="danger"
        @click="
          () => {
            showDelete = false
          }
        "
        >Xóa</CButton
      >
    </CModalFooter>
  </CModal>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'TaskTemplate',
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
      showDelete: false,
    }
  },
}
</script>

<style scoped>
.wrap-button {
  display: flex;
  justify-content: flex-end;
}
.filter {
  display: flex;
  margin-bottom: 2em;
  justify-content: space-between;
  align-items: flex-end;
}
.filter-left {
  display: flex;
  align-items: flex-end;
}
.filter-right {
  white-space: nowrap;
  align-items: flex-end;
}
.input-label {
  white-space: nowrap;
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
.header-page {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 2em;
}
</style>
