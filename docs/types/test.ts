/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import reviveError = require( './index' );


// TESTS //

// The function can be used to revive a serialized object...
{
	JSON.parse( '{"beep":"boop"}', reviveError ); // $ExpectType any
}

// The function does not compile if provided a first argument that is not a string...
{
	reviveError( true, 1 ); // $ExpectError
	reviveError( false, 1 ); // $ExpectError
	reviveError( null, 1 ); // $ExpectError
	reviveError( undefined, 1 ); // $ExpectError
	reviveError( 5, 1 ); // $ExpectError
	reviveError( [], 1 ); // $ExpectError
	reviveError( {}, 1 ); // $ExpectError
	reviveError( ( x: number ): number => x, 1 ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	reviveError(); // $ExpectError
	reviveError( 'beep' ); // $ExpectError
}
