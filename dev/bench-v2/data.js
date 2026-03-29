window.BENCHMARK_DATA = {
  "lastUpdate": 1774805546120,
  "repoUrl": "https://github.com/dextronomous/UltrafastSecp256k1",
  "entries": {
    "UltrafastSecp256k1 Performance": [
      {
        "commit": {
          "author": {
            "email": "payysoon@gmail.com",
            "name": "Vano Chkheidze",
            "username": "shrec"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5f6dde593c563653798f01ca9d21c4a757975e69",
          "message": "fix: clear remaining low-level code scanning alerts (#162)\n\nCo-authored-by: shrec <shrec@users.noreply.github.com>",
          "timestamp": "2026-03-17T06:54:30+04:00",
          "tree_id": "410af40c0f0d138e9101aeb86918be76b80f1951",
          "url": "https://github.com/dextronomous/UltrafastSecp256k1/commit/5f6dde593c563653798f01ca9d21c4a757975e69"
        },
        "date": 1773718988127,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "field_inv",
            "value": 1051.6,
            "unit": "ns"
          },
          {
            "name": "scalar_inv",
            "value": 1336.4,
            "unit": "ns"
          },
          {
            "name": "pubkey_create (k*G)",
            "value": 7805.6,
            "unit": "ns"
          },
          {
            "name": "scalar_mul (k*P)",
            "value": 32891.5,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_with_plan",
            "value": 32385.8,
            "unit": "ns"
          },
          {
            "name": "dual_mul (a*G + b*P)",
            "value": 35812.8,
            "unit": "ns"
          },
          {
            "name": "point_add (affine+affine)",
            "value": 1304.1,
            "unit": "ns"
          },
          {
            "name": "point_add (J+A mixed)",
            "value": 240,
            "unit": "ns"
          },
          {
            "name": "point_dbl",
            "value": 145.6,
            "unit": "ns"
          },
          {
            "name": "batch_normalize /pt (N=64)",
            "value": 187.7,
            "unit": "ns"
          },
          {
            "name": "next_inplace (+=G)",
            "value": 255,
            "unit": "ns"
          },
          {
            "name": "KPlan::from_scalar(w=4)",
            "value": 2731.2,
            "unit": "ns"
          },
          {
            "name": "batch_to_compressed /pt (N=64)",
            "value": 197.9,
            "unit": "ns"
          },
          {
            "name": "batch_x_only_bytes /pt (N=64)",
            "value": 149,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign",
            "value": 10503.6,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_verified",
            "value": 66661.6,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify",
            "value": 37932,
            "unit": "ns"
          },
          {
            "name": "schnorr_keypair_create",
            "value": 7822.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign",
            "value": 8330.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign_verified",
            "value": 48482.5,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (cached xonly)",
            "value": 38449.3,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (raw bytes)",
            "value": 39768.2,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=4)",
            "value": 148924.4,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=4)",
            "value": 37231.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=16)",
            "value": 604519.5,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=16)",
            "value": 37782.5,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=64)",
            "value": 3975714.1,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=64)",
            "value": 62120.5,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=4)",
            "value": 144868.7,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=16)",
            "value": 581015.2,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=64)",
            "value": 2331132.4,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_inverse (SafeGCD)",
            "value": 1876,
            "unit": "ns"
          },
          {
            "name": "ct::generator_mul (k*G)",
            "value": 17496.1,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_mul (k*P)",
            "value": 39129.5,
            "unit": "ns"
          },
          {
            "name": "ct::point_dbl",
            "value": 148,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_complete (11M+6S)",
            "value": 403.9,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_complete (7M+5S)",
            "value": 277.6,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_unified (7M+5S)",
            "value": 273.4,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign",
            "value": 21921.1,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign_verified",
            "value": 78060.8,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign",
            "value": 19358.1,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign_verified",
            "value": 59534,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_keypair_create",
            "value": 18911.3,
            "unit": "ns"
          },
          {
            "name": "keccak256 (32B)",
            "value": 437.5,
            "unit": "ns"
          },
          {
            "name": "ethereum_address",
            "value": 440.5,
            "unit": "ns"
          },
          {
            "name": "eip191_hash",
            "value": 438.7,
            "unit": "ns"
          },
          {
            "name": "eth_sign_hash",
            "value": 10531.7,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_recoverable",
            "value": 10486.1,
            "unit": "ns"
          },
          {
            "name": "ecrecover",
            "value": 47565.9,
            "unit": "ns"
          },
          {
            "name": "eth_personal_sign",
            "value": 11003.4,
            "unit": "ns"
          },
          {
            "name": "ethereum_address_eip55",
            "value": 996.4,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute (SHA256 shared secret)",
            "value": 40600.1,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute_raw (x-only shared)",
            "value": 40493.6,
            "unit": "ns"
          },
          {
            "name": "taproot_output_key (BIP-341 key path)",
            "value": 16413.9,
            "unit": "ns"
          },
          {
            "name": "taproot_tweak_privkey (BIP-341)",
            "value": 19996,
            "unit": "ns"
          },
          {
            "name": "bip32_master_key (64B seed)",
            "value": 1310.7,
            "unit": "ns"
          },
          {
            "name": "bip32_coin_derive_key (BTC m/84'/0'/0'/0/0)",
            "value": 139917.2,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (BTC end-to-end)",
            "value": 160919.6,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (ETH end-to-end)",
            "value": 160998.8,
            "unit": "ns"
          },
          {
            "name": "silent_payment_create_output",
            "value": 48436.6,
            "unit": "ns"
          },
          {
            "name": "silent_payment_scan (single output set)",
            "value": 67315.6,
            "unit": "ns"
          },
          {
            "name": "field_inv_var",
            "value": 1129.4,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse (CT)",
            "value": 1852.4,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse_var",
            "value": 1162.3,
            "unit": "ns"
          },
          {
            "name": "point_dbl (gej_double_var)",
            "value": 149.3,
            "unit": "ns"
          },
          {
            "name": "point_add (gej_add_ge_var)",
            "value": 246.6,
            "unit": "ns"
          },
          {
            "name": "ecmult (a*P + b*G, Strauss)",
            "value": 37130.8,
            "unit": "ns"
          },
          {
            "name": "ecmult_gen (k*G, comb)",
            "value": 18420,
            "unit": "ns"
          },
          {
            "name": "generator_mul (ec_pubkey_create)",
            "value": 20378.5,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_P (k*P, tweak_mul)",
            "value": 34749.6,
            "unit": "ns"
          },
          {
            "name": "point_add (pubkey_combine)",
            "value": 2554.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign (BIP-340)",
            "value": 21874.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (BIP-340)",
            "value": 39552.7,
            "unit": "ns"
          },
          {
            "name": "generator_mul (EC_POINT_mul k*G)",
            "value": 394936.9,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign (ECDSA_do_sign)",
            "value": 415362.3,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify (ECDSA_do_verify)",
            "value": 375395.4,
            "unit": "ns"
          },
          {
            "name": "Pedersen commit",
            "value": 57018.3,
            "unit": "ns"
          },
          {
            "name": "Knowledge prove (sigma)",
            "value": 41764.3,
            "unit": "ns"
          },
          {
            "name": "Knowledge verify",
            "value": 40706.4,
            "unit": "ns"
          },
          {
            "name": "DLEQ prove",
            "value": 81049.7,
            "unit": "ns"
          },
          {
            "name": "DLEQ verify",
            "value": 107516.9,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_prove (64b)",
            "value": 24392120,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_verify (64b)",
            "value": 4922632.7,
            "unit": "ns"
          },
          {
            "name": "Harness",
            "value": 3000000000,
            "unit": "ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shrec@users.noreply.github.com",
            "name": "shrec",
            "username": "shrec"
          },
          "committer": {
            "email": "shrec@users.noreply.github.com",
            "name": "shrec",
            "username": "shrec"
          },
          "distinct": true,
          "id": "5177e299ac15e7e251de858b35060f9c651bd512",
          "message": "Split hostile precompute Windows audit invariant",
          "timestamp": "2026-03-28T19:01:01Z",
          "tree_id": "32bc9885b5b2ea46ebe77eae3e6c8bf1aab8d771",
          "url": "https://github.com/dextronomous/UltrafastSecp256k1/commit/5177e299ac15e7e251de858b35060f9c651bd512"
        },
        "date": 1774805544189,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "field_inv",
            "value": 1048.4,
            "unit": "ns"
          },
          {
            "name": "scalar_inv",
            "value": 1334.8,
            "unit": "ns"
          },
          {
            "name": "pubkey_create (k*G)",
            "value": 7944.1,
            "unit": "ns"
          },
          {
            "name": "scalar_mul (k*P)",
            "value": 32976.7,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_with_plan",
            "value": 30983.4,
            "unit": "ns"
          },
          {
            "name": "dual_mul (a*G + b*P)",
            "value": 35873.7,
            "unit": "ns"
          },
          {
            "name": "point_add (affine+affine)",
            "value": 1320.1,
            "unit": "ns"
          },
          {
            "name": "point_add (J+A mixed)",
            "value": 241,
            "unit": "ns"
          },
          {
            "name": "point_dbl",
            "value": 148.9,
            "unit": "ns"
          },
          {
            "name": "next_inplace (+=G)",
            "value": 254,
            "unit": "ns"
          },
          {
            "name": "KPlan::from_scalar(w=4)",
            "value": 2743.2,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign",
            "value": 14231.9,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_verified",
            "value": 74530.7,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify",
            "value": 38039.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_keypair_create",
            "value": 7948.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign",
            "value": 9493.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign_verified",
            "value": 50144.2,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (cached xonly)",
            "value": 38903.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (raw bytes)",
            "value": 40200.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=4)",
            "value": 150720.8,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=4)",
            "value": 37680.2,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=4)",
            "value": 150540.8,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=4)",
            "value": 37635.2,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=16)",
            "value": 611894.1,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=16)",
            "value": 38243.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=16)",
            "value": 601337.5,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=16)",
            "value": 37583.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=64)",
            "value": 2572214.2,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=64)",
            "value": 40190.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=64)",
            "value": 2489326.7,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=64)",
            "value": 38895.7,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=128)",
            "value": 4797722,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=128)",
            "value": 37482.2,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=128)",
            "value": 4718417.7,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=128)",
            "value": 36862.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=192)",
            "value": 6487508.6,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=192)",
            "value": 33789.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=192)",
            "value": 6409375,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=192)",
            "value": 33382.2,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=4)",
            "value": 145157.2,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=16)",
            "value": 580967.1,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=64)",
            "value": 2334855.2,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=128)",
            "value": 4668961.6,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=192)",
            "value": 7006751.1,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_inverse (SafeGCD)",
            "value": 1875.9,
            "unit": "ns"
          },
          {
            "name": "ct::generator_mul (k*G)",
            "value": 21485,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_mul (k*P)",
            "value": 41693,
            "unit": "ns"
          },
          {
            "name": "ct::point_dbl",
            "value": 143.7,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_complete (11M+6S)",
            "value": 403.2,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_complete (7M+5S)",
            "value": 275.2,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_unified (7M+5S)",
            "value": 273.4,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign",
            "value": 29575.9,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign_verified",
            "value": 89829,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign",
            "value": 24368.8,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign_verified",
            "value": 65112.4,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_keypair_create",
            "value": 22931.1,
            "unit": "ns"
          },
          {
            "name": "keccak256 (32B)",
            "value": 436.1,
            "unit": "ns"
          },
          {
            "name": "ethereum_address",
            "value": 447.9,
            "unit": "ns"
          },
          {
            "name": "eip191_hash",
            "value": 437.7,
            "unit": "ns"
          },
          {
            "name": "eth_sign_hash",
            "value": 14245.3,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_recoverable",
            "value": 14197.8,
            "unit": "ns"
          },
          {
            "name": "ecrecover",
            "value": 48172.3,
            "unit": "ns"
          },
          {
            "name": "eth_personal_sign",
            "value": 14688.3,
            "unit": "ns"
          },
          {
            "name": "ethereum_address_eip55",
            "value": 991,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute (SHA256 shared secret)",
            "value": 44439.1,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute_raw (x-only shared)",
            "value": 43021.5,
            "unit": "ns"
          },
          {
            "name": "taproot_output_key (BIP-341 key path)",
            "value": 17725.1,
            "unit": "ns"
          },
          {
            "name": "taproot_tweak_privkey (BIP-341)",
            "value": 24587.8,
            "unit": "ns"
          },
          {
            "name": "bip32_master_key (64B seed)",
            "value": 1363.2,
            "unit": "ns"
          },
          {
            "name": "bip32_coin_derive_key (BTC m/84'/0'/0'/0/0)",
            "value": 169339.3,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (BTC end-to-end)",
            "value": 194693.4,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (ETH end-to-end)",
            "value": 194380.8,
            "unit": "ns"
          },
          {
            "name": "silent_payment_create_output",
            "value": 53325.5,
            "unit": "ns"
          },
          {
            "name": "silent_payment_scan (single output set)",
            "value": 74466,
            "unit": "ns"
          },
          {
            "name": "field_inv_var",
            "value": 1204.2,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse (CT)",
            "value": 1843.6,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse_var",
            "value": 1166.8,
            "unit": "ns"
          },
          {
            "name": "point_dbl (gej_double_var)",
            "value": 149.4,
            "unit": "ns"
          },
          {
            "name": "point_add (gej_add_ge_var)",
            "value": 246.7,
            "unit": "ns"
          },
          {
            "name": "ecmult (a*P + b*G, Strauss)",
            "value": 37147.4,
            "unit": "ns"
          },
          {
            "name": "ecmult_gen (k*G, comb)",
            "value": 18368,
            "unit": "ns"
          },
          {
            "name": "generator_mul (ec_pubkey_create)",
            "value": 20377.4,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_P (k*P, tweak_mul)",
            "value": 34589.7,
            "unit": "ns"
          },
          {
            "name": "point_add (pubkey_combine)",
            "value": 2545.5,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign (BIP-340)",
            "value": 21870.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (BIP-340)",
            "value": 39491.3,
            "unit": "ns"
          },
          {
            "name": "generator_mul (EC_POINT_mul k*G)",
            "value": 391653.9,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign (ECDSA_do_sign)",
            "value": 416661.9,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify (ECDSA_do_verify)",
            "value": 375131.9,
            "unit": "ns"
          },
          {
            "name": "Pedersen commit",
            "value": 65424.3,
            "unit": "ns"
          },
          {
            "name": "Knowledge prove (sigma)",
            "value": 46685.5,
            "unit": "ns"
          },
          {
            "name": "Knowledge verify",
            "value": 41461.1,
            "unit": "ns"
          },
          {
            "name": "DLEQ prove",
            "value": 89731.1,
            "unit": "ns"
          },
          {
            "name": "DLEQ verify",
            "value": 108705.6,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_prove (64b)",
            "value": 24443016.2,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_verify (64b)",
            "value": 2952474.1,
            "unit": "ns"
          },
          {
            "name": "Schnorr adaptor sign",
            "value": 36515.3,
            "unit": "ns"
          },
          {
            "name": "Schnorr adaptor verify",
            "value": 51323.3,
            "unit": "ns"
          },
          {
            "name": "Schnorr adaptor adapt",
            "value": 22868.1,
            "unit": "ns"
          },
          {
            "name": "ECDSA adaptor sign",
            "value": 65669.7,
            "unit": "ns"
          },
          {
            "name": "ECDSA adaptor verify",
            "value": 64710,
            "unit": "ns"
          },
          {
            "name": "keygen_begin (DKG round 1)",
            "value": 45040.2,
            "unit": "ns"
          },
          {
            "name": "nonce_gen",
            "value": 44629.9,
            "unit": "ns"
          },
          {
            "name": "partial_sign",
            "value": 86872.9,
            "unit": "ns"
          },
          {
            "name": "partial_verify",
            "value": 159148.6,
            "unit": "ns"
          },
          {
            "name": "aggregate → Schnorr sig",
            "value": 81759.6,
            "unit": "ns"
          },
          {
            "name": "key_agg (BIP-327)",
            "value": 71823.2,
            "unit": "ns"
          },
          {
            "name": "sig_agg → Schnorr sig",
            "value": 1184,
            "unit": "ns"
          },
          {
            "name": "ECIES encrypt (256B payload)",
            "value": 101304.7,
            "unit": "ns"
          },
          {
            "name": "ECIES decrypt (256B payload)",
            "value": 83573,
            "unit": "ns"
          },
          {
            "name": "Bitcoin message sign",
            "value": 31297.5,
            "unit": "ns"
          },
          {
            "name": "Bitcoin message verify",
            "value": 36189.4,
            "unit": "ns"
          },
          {
            "name": "SHA-256 (32B input)",
            "value": 243,
            "unit": "ns"
          },
          {
            "name": "SHA-512 (32B input)",
            "value": 333.9,
            "unit": "ns"
          },
          {
            "name": "Multi-scalar mul (4 points)",
            "value": 91247.6,
            "unit": "ns"
          },
          {
            "name": "Multi-scalar mul (64 points)",
            "value": 1143683,
            "unit": "ns"
          },
          {
            "name": "bip39_generate (12 words)",
            "value": 17340,
            "unit": "ns"
          },
          {
            "name": "bip39_generate (24 words)",
            "value": 17589.5,
            "unit": "ns"
          },
          {
            "name": "bip39_validate (12 words)",
            "value": 1482.6,
            "unit": "ns"
          },
          {
            "name": "bip39_to_seed (PBKDF2, 12 words)",
            "value": 2658062.7,
            "unit": "ns"
          },
          {
            "name": "BIP-143 sighash (1-in/1-out)",
            "value": 1095.9,
            "unit": "ns"
          },
          {
            "name": "BIP-144 compute_wtxid",
            "value": 1362.1,
            "unit": "ns"
          },
          {
            "name": "BIP-144 witness_commitment",
            "value": 776.6,
            "unit": "ns"
          },
          {
            "name": "BIP-144 tx_weight",
            "value": 214.5,
            "unit": "ns"
          },
          {
            "name": "BIP-341 keypath_sighash",
            "value": 2455.8,
            "unit": "ns"
          },
          {
            "name": "BIP-342 tapscript_sighash",
            "value": 2707.4,
            "unit": "ns"
          },
          {
            "name": "ElligatorSwift create",
            "value": 86760.7,
            "unit": "ns"
          },
          {
            "name": "ElligatorSwift XDH (ECDH)",
            "value": 63109.1,
            "unit": "ns"
          },
          {
            "name": "HKDF-SHA256 extract",
            "value": 1038.6,
            "unit": "ns"
          },
          {
            "name": "HKDF-SHA256 expand",
            "value": 1012.8,
            "unit": "ns"
          },
          {
            "name": "AEAD encrypt (256B)",
            "value": 753.7,
            "unit": "ns"
          },
          {
            "name": "AEAD decrypt (256B)",
            "value": 752.8,
            "unit": "ns"
          },
          {
            "name": "Session handshake (full)",
            "value": 317357.6,
            "unit": "ns"
          },
          {
            "name": "Session encrypt (256B)",
            "value": 903.5,
            "unit": "ns"
          },
          {
            "name": "Session decrypt (256B)",
            "value": 1835.2,
            "unit": "ns"
          },
          {
            "name": "Session encrypt (1KB)",
            "value": 2716.8,
            "unit": "ns"
          },
          {
            "name": "Session roundtrip (256B)",
            "value": 1836.2,
            "unit": "ns"
          },
          {
            "name": "Harness",
            "value": 3000000000,
            "unit": "ns"
          }
        ]
      }
    ]
  }
}