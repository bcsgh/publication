cc_test(
    name = "correct_test",
    srcs = ["example_test.cc"],
    defines = ["INSTANTIATE"],
    deps = ["@com_google_googletest_old//:gtest_main"],
)

cc_test(
    name = "bad_test",
    srcs = ["example_test.cc"],
    deps = ["@com_google_googletest_old//:gtest_main"],
)

cc_test(
    name = "shows_test",
    srcs = ["example_test.cc"],
    deps = ["@com_google_googletest_new//:gtest_main"],
)
