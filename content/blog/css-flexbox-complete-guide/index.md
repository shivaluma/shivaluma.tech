---
title: Hướng dẫn toàn tập về Flexbox
date: "2020-10-04"
description: Một hướng dẫn đầy đủ giải thích mọi thứ về flexbox, tập trung vào tất cả các thuộc tính khác nhau của flexbox từ container đến các child item.
tags: ["css"]
---

# Giới thiệu

Flexbox Layout, hay còn được gọi là Flexible Box ra đời nhằm mục đích cung cấp một cách hiệu quả hơn để layout cho trang web, sắp xếp và phân bố các phần tử trong một khối chứa (container) ngay cả khi chưa biết kích thước của các phần tử hoặc các phần tử mang kích thước động ( thể hiện sự linh hoạt "**flex**" ).

Ý tưởng chính đằng sau flexbox là cung cấp một container có khả năng thay đổi width / height ( và order ) của các items để lấp đầy không gian sẵn có một cách tốt nhất (chủ yếu để phù hợp với tất cả các loại thiết bị hiển thị và các kích thước màn hình khác nhau). Một flex container có thể mở rộng các items để lấp đầy các khoảng trống hoặc thu nhỏ chúng lại tránh việc items tràn ra ngoài container (overflow).

Mặc dù flexbox hoạt động tốt cho các trang web, nhưng flexbox lại thiếu đi sự "linh hoạt" để hỗ trợ các ứng dụng lớn có layout phức tạp (đặc biệt khi nói đến thay đổi hướng, thay đổi kích thước, kéo dài, thu nhỏ, ...).

**Note :** Flexbox thường chỉ được sử dụng để thiết kế các layout một chiều và sẽ không liên quan đến cách bố trí của các dòng tiếp theo. Để xây dựng các layout phức tạp hơn, người ta thường sử dụng **Grid**.

# Các khái niệm cơ bản & thuật ngữ

![Flex container](https://css-tricks.com/wp-content/uploads/2018/10/01-container.svg)

## Các thuộc tính cho Parent (flex container)

### display

Thuộc tính display cho phép chúng ta xác định kiểu hiển thị của thẻ HTML trên trang web, với một số kiểu có sẵn như (block, inline, inline-block, ...)

Với sự xuất hiện của Flexbox thì ta sẽ có thêm 1 kiểu mới là **flex**, nó sẽ tạo ra một flex-container là một bối cảnh linh hoạt cho tất cả các direct child của nó.

```css
.container {
  display: flex;
}
```

### flex-direction

![](https://css-tricks.com/wp-content/uploads/2018/10/flex-direction.svg)

Thuộc tính **flex-direction** sẽ thiết lập trục chính cho container flex cũng như xác định hướng để bố trí các items thuộc container.

```css
.container {
  display: flex;
  flex-direction: row | row-reverse | column | column-reverse;
  /* flex-direction chỉ chứa một giá trị duy nhất trong 4 giá trị mẫu ở trên */
}
```

Giá trị **row** (mặc định) sẽ thiết lập hướng của các items theo hướng từ trái sang phải theo chiều ngang.

Với **row-reverse**, sẽ là theo chiều ngang nhưng từ phải sang trái, điểm bắt đầu của container sẽ được đưa về cạnh phải của container.

Với **column** / **column-reverse**, trục chính sẽ chuyển từ nằm ngang sang thẳng đứng với hướng chính từ trên xuống dưới (từ dưới lên trên với column-reverse).

### flex-wrap

![](https://css-tricks.com/wp-content/uploads/2018/10/flex-wrap.svg)

Theo mặc định, flex container sẽ cố gắng để nhét tất cả các items lên cùng một hàng. Vậy khi items quá nhiều thì sao @@!, các item sẽ bị tràn ra ngoài container trên hàng đó :v. Có vẻ hơi chuối nhưng không sao vì đã có thuộc tính flex-wrap sinh ra để giải quết vấn đề này.

```css
.container {
  display: flex;
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

**no-wrap** (mặc định) : Tất cả các flex items sẽ nằm trên cùng một hàng.

**wrap** : Các flex items sẽ được bọc lại trong container thành nhiều hàng, khi hàng đầy thì sẽ được đẩy xuống hàng tiếp theo, theo thứ tự từ trên xuống dưới.

**wrap-reverse** : Tương tự wrap nhưng sẽ được wrap thành nhiều hàng xếp từ dưới lên trên.
