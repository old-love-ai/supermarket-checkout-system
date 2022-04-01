/*
 Navicat Premium Data Transfer

 Source Server         : mysql
 Source Server Type    : MySQL
 Source Server Version : 80027
 Source Host           : localhost:3306
 Source Schema         : zhouhangyong

 Target Server Type    : MySQL
 Target Server Version : 80027
 File Encoding         : 65001

 Date: 01/04/2022 12:22:41
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for kehu
-- ----------------------------
DROP TABLE IF EXISTS `kehu`;
CREATE TABLE `kehu`  (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `姓名` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `身份证号` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `客户编号` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `性别` char(4) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `住址` char(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `电话` char(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `剩余金额` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `积分` int NULL DEFAULT NULL,
  `客户类型` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`, `身份证号`, `客户编号`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of kehu
-- ----------------------------
INSERT INTO `kehu` VALUES (1, '周航永', '411303199809162815', 'k13333665368', '男', 'null', '13333665368', '300', 68, '普通会员');
INSERT INTO `kehu` VALUES (2, '周航永', '411303199809162816', 'k13333665369', '男', 'null', '13333665369', '300', 0, '超级会员');

-- ----------------------------
-- Table structure for shangpin
-- ----------------------------
DROP TABLE IF EXISTS `shangpin`;
CREATE TABLE `shangpin`  (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `商品名称` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `商品编号` int NOT NULL,
  `商品单价` int NULL DEFAULT NULL,
  `商品数量` int NULL DEFAULT NULL,
  `生产日期` date NULL DEFAULT NULL,
  `保质期` int NULL DEFAULT NULL,
  `进价` int NULL DEFAULT NULL,
  `利润` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`, `商品编号`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of shangpin
-- ----------------------------
INSERT INTO `shangpin` VALUES (1, '白菜', 3001, 3, 50, '2020-06-04', 24, 1, 2);
INSERT INTO `shangpin` VALUES (2, '薯片', 3002, 10, 50, NULL, NULL, 5, 5);

-- ----------------------------
-- Table structure for yuangong
-- ----------------------------
DROP TABLE IF EXISTS `yuangong`;
CREATE TABLE `yuangong`  (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `姓名` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `身份证号` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `员工编号` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `密码` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `性别` char(4) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `住址` char(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `电话号码` char(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `职务` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `权限` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`, `员工编号`, `身份证号`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 15 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of yuangong
-- ----------------------------
INSERT INTO `yuangong` VALUES (1, '周航永', '411303199809162815', 'G411303199809162815', 'Zhy0626@', '男', 'null', '13333665368', '管理员', '管理员');
INSERT INTO `yuangong` VALUES (2, '张三', '411303199809162816', 'G411303199809162816', 'Zhy0626#', '男', 'null', '13333665369', '收银员', '收银');
INSERT INTO `yuangong` VALUES (3, '李四', '411303199809162817', 'G411303199809162817', 'Zhy0626$', '男', '河南漯河', '13333665362', '销售员', 'null');

SET FOREIGN_KEY_CHECKS = 1;
