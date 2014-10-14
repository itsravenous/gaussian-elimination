var gauss = require('./gauss');

/**
 * Solves 4x = 8
 */
function test_one() {
    $A = [[4]];
    $x = [8];
    $result = gauss($A, $x);
    console.log($result);
}

/**
 * Solves this system:
 * x + y = 10
 * 2x + y = 16
 */
function test_two () {
    $A = [[1, 1], [2, 1]];
    $x = [10, 16];
    $result = gauss($A, $x);
    console.log($result);

}

/**
 * Solves this system:
 * x + y + z = 6
 * 2x + y + 2z = 10
 * x + 2y + 3z = 14
 */
function test_three () {
    $A = [[1, 1, 1], [2, 1, 2], [1, 2, 3]];
    $x = [6, 10, 14];
    $result = gauss($A, $x);
    console.log($result);
}

test_one();
test_two();
test_three();
