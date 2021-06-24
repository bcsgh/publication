#include "gtest/gtest.h"

bool Foo(const char *) { return true; }

class ExampleTestSuite : public ::testing::TestWithParam<const char *> {
  // ...
};

TEST_P(ExampleTestSuite, Case1) {
  // ...
  EXPECT_TRUE(Foo(GetParam()));
}

#ifdef INSTANTIATE
INSTANTIATE_TEST_SUITE_P(Eeny, ExampleTestSuite,
                         ::testing::Values("meeny", "miny", "moe"));
#endif // INSTANTIATE
