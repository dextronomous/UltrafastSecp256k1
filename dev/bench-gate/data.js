window.BENCHMARK_DATA = {
  "lastUpdate": 1774805416711,
  "repoUrl": "https://github.com/dextronomous/UltrafastSecp256k1",
  "entries": {
    "Perf Regression Gate": [
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
        "date": 1773718930175,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "field_inv",
            "value": 1048.9,
            "unit": "ns"
          },
          {
            "name": "scalar_inv",
            "value": 1335.6,
            "unit": "ns"
          },
          {
            "name": "pubkey_create (k*G)",
            "value": 7967,
            "unit": "ns"
          },
          {
            "name": "scalar_mul (k*P)",
            "value": 33030.6,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_with_plan",
            "value": 32539,
            "unit": "ns"
          },
          {
            "name": "dual_mul (a*G + b*P)",
            "value": 36163.4,
            "unit": "ns"
          },
          {
            "name": "point_add (affine+affine)",
            "value": 1303.8,
            "unit": "ns"
          },
          {
            "name": "point_add (J+A mixed)",
            "value": 238.4,
            "unit": "ns"
          },
          {
            "name": "point_dbl",
            "value": 144.3,
            "unit": "ns"
          },
          {
            "name": "batch_normalize /pt (N=64)",
            "value": 187.2,
            "unit": "ns"
          },
          {
            "name": "next_inplace (+=G)",
            "value": 255.6,
            "unit": "ns"
          },
          {
            "name": "KPlan::from_scalar(w=4)",
            "value": 2695.4,
            "unit": "ns"
          },
          {
            "name": "batch_to_compressed /pt (N=64)",
            "value": 197.5,
            "unit": "ns"
          },
          {
            "name": "batch_x_only_bytes /pt (N=64)",
            "value": 147.9,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign",
            "value": 10660,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_verified",
            "value": 66836.7,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify",
            "value": 38236.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_keypair_create",
            "value": 8079.9,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign",
            "value": 8547.9,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign_verified",
            "value": 48584.9,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (cached xonly)",
            "value": 38557,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (raw bytes)",
            "value": 39666.5,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=4)",
            "value": 263495,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=4)",
            "value": 65873.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=16)",
            "value": 604517.6,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=16)",
            "value": 37782.3,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=64)",
            "value": 3976476.1,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=64)",
            "value": 62132.4,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=4)",
            "value": 144905.6,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=16)",
            "value": 580655.9,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=64)",
            "value": 2335835.4,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_inverse (SafeGCD)",
            "value": 1860.5,
            "unit": "ns"
          },
          {
            "name": "ct::generator_mul (k*G)",
            "value": 17432.2,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_mul (k*P)",
            "value": 39091,
            "unit": "ns"
          },
          {
            "name": "ct::point_dbl",
            "value": 144.7,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_complete (11M+6S)",
            "value": 400.8,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_complete (7M+5S)",
            "value": 277.2,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_unified (7M+5S)",
            "value": 274.7,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign",
            "value": 21973.9,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign_verified",
            "value": 77930.4,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign",
            "value": 19564.7,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign_verified",
            "value": 59523.4,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_keypair_create",
            "value": 19027.6,
            "unit": "ns"
          },
          {
            "name": "keccak256 (32B)",
            "value": 439.6,
            "unit": "ns"
          },
          {
            "name": "ethereum_address",
            "value": 440,
            "unit": "ns"
          },
          {
            "name": "eip191_hash",
            "value": 440,
            "unit": "ns"
          },
          {
            "name": "eth_sign_hash",
            "value": 10632.2,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_recoverable",
            "value": 10466.4,
            "unit": "ns"
          },
          {
            "name": "ecrecover",
            "value": 47796.8,
            "unit": "ns"
          },
          {
            "name": "eth_personal_sign",
            "value": 11223.9,
            "unit": "ns"
          },
          {
            "name": "ethereum_address_eip55",
            "value": 992.5,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute (SHA256 shared secret)",
            "value": 40788.3,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute_raw (x-only shared)",
            "value": 40435.3,
            "unit": "ns"
          },
          {
            "name": "taproot_output_key (BIP-341 key path)",
            "value": 16355.6,
            "unit": "ns"
          },
          {
            "name": "taproot_tweak_privkey (BIP-341)",
            "value": 19950.8,
            "unit": "ns"
          },
          {
            "name": "bip32_master_key (64B seed)",
            "value": 1296,
            "unit": "ns"
          },
          {
            "name": "bip32_coin_derive_key (BTC m/84'/0'/0'/0/0)",
            "value": 139839.7,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (BTC end-to-end)",
            "value": 161902.1,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (ETH end-to-end)",
            "value": 161039.8,
            "unit": "ns"
          },
          {
            "name": "silent_payment_create_output",
            "value": 48369.9,
            "unit": "ns"
          },
          {
            "name": "silent_payment_scan (single output set)",
            "value": 67414.7,
            "unit": "ns"
          },
          {
            "name": "field_inv_var",
            "value": 1131.1,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse (CT)",
            "value": 1843.3,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse_var",
            "value": 1163.1,
            "unit": "ns"
          },
          {
            "name": "point_dbl (gej_double_var)",
            "value": 147.6,
            "unit": "ns"
          },
          {
            "name": "point_add (gej_add_ge_var)",
            "value": 245.2,
            "unit": "ns"
          },
          {
            "name": "ecmult (a*P + b*G, Strauss)",
            "value": 37377.9,
            "unit": "ns"
          },
          {
            "name": "ecmult_gen (k*G, comb)",
            "value": 18377,
            "unit": "ns"
          },
          {
            "name": "generator_mul (ec_pubkey_create)",
            "value": 20810.1,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_P (k*P, tweak_mul)",
            "value": 34787.2,
            "unit": "ns"
          },
          {
            "name": "point_add (pubkey_combine)",
            "value": 2545.2,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign (BIP-340)",
            "value": 21863.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (BIP-340)",
            "value": 39955.7,
            "unit": "ns"
          },
          {
            "name": "generator_mul (EC_POINT_mul k*G)",
            "value": 391201.7,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign (ECDSA_do_sign)",
            "value": 415500.9,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify (ECDSA_do_verify)",
            "value": 376111.8,
            "unit": "ns"
          },
          {
            "name": "Pedersen commit",
            "value": 56960.7,
            "unit": "ns"
          },
          {
            "name": "Knowledge prove (sigma)",
            "value": 41778.5,
            "unit": "ns"
          },
          {
            "name": "Knowledge verify",
            "value": 40678.6,
            "unit": "ns"
          },
          {
            "name": "DLEQ prove",
            "value": 80975.3,
            "unit": "ns"
          },
          {
            "name": "DLEQ verify",
            "value": 107432.3,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_prove (64b)",
            "value": 24397043.1,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_verify (64b)",
            "value": 4940707.9,
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
        "date": 1774805415407,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "field_inv",
            "value": 1043,
            "unit": "ns"
          },
          {
            "name": "scalar_inv",
            "value": 1334.9,
            "unit": "ns"
          },
          {
            "name": "pubkey_create (k*G)",
            "value": 8061.4,
            "unit": "ns"
          },
          {
            "name": "scalar_mul (k*P)",
            "value": 33149.5,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_with_plan",
            "value": 30959.5,
            "unit": "ns"
          },
          {
            "name": "dual_mul (a*G + b*P)",
            "value": 36405.6,
            "unit": "ns"
          },
          {
            "name": "point_add (affine+affine)",
            "value": 1321.9,
            "unit": "ns"
          },
          {
            "name": "point_add (J+A mixed)",
            "value": 243.5,
            "unit": "ns"
          },
          {
            "name": "point_dbl",
            "value": 148.3,
            "unit": "ns"
          },
          {
            "name": "next_inplace (+=G)",
            "value": 251.6,
            "unit": "ns"
          },
          {
            "name": "KPlan::from_scalar(w=4)",
            "value": 2717.9,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign",
            "value": 14494.2,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_verified",
            "value": 74875.1,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify",
            "value": 38109.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_keypair_create",
            "value": 8329.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign",
            "value": 9811.3,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign_verified",
            "value": 50237.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (cached xonly)",
            "value": 38928.7,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (raw bytes)",
            "value": 40081.9,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=4)",
            "value": 150889.1,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=4)",
            "value": 37722.3,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=4)",
            "value": 150649.9,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=4)",
            "value": 37662.5,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=16)",
            "value": 613448.7,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=16)",
            "value": 38340.5,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=16)",
            "value": 601302,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=16)",
            "value": 37581.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=64)",
            "value": 2573909.8,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=64)",
            "value": 40217.3,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=64)",
            "value": 2489445.6,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=64)",
            "value": 38897.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=128)",
            "value": 4802665.7,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=128)",
            "value": 37520.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=128)",
            "value": 4715856.2,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=128)",
            "value": 36842.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=192)",
            "value": 6494795.6,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=192)",
            "value": 33827.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=192)",
            "value": 6399814.3,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=192)",
            "value": 33332.4,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=4)",
            "value": 144914.6,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=16)",
            "value": 581711.1,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=64)",
            "value": 2337785.5,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=128)",
            "value": 4666692,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=192)",
            "value": 7003051.5,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_inverse (SafeGCD)",
            "value": 1858.1,
            "unit": "ns"
          },
          {
            "name": "ct::generator_mul (k*G)",
            "value": 21412.2,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_mul (k*P)",
            "value": 41715.4,
            "unit": "ns"
          },
          {
            "name": "ct::point_dbl",
            "value": 143.9,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_complete (11M+6S)",
            "value": 403.2,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_complete (7M+5S)",
            "value": 276.6,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_unified (7M+5S)",
            "value": 275.7,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign",
            "value": 29641.4,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign_verified",
            "value": 89664.8,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign",
            "value": 24544.1,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign_verified",
            "value": 65203.1,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_keypair_create",
            "value": 23087.6,
            "unit": "ns"
          },
          {
            "name": "keccak256 (32B)",
            "value": 434.8,
            "unit": "ns"
          },
          {
            "name": "ethereum_address",
            "value": 448.7,
            "unit": "ns"
          },
          {
            "name": "eip191_hash",
            "value": 436.9,
            "unit": "ns"
          },
          {
            "name": "eth_sign_hash",
            "value": 14398.1,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_recoverable",
            "value": 14193,
            "unit": "ns"
          },
          {
            "name": "ecrecover",
            "value": 48368.5,
            "unit": "ns"
          },
          {
            "name": "eth_personal_sign",
            "value": 14856,
            "unit": "ns"
          },
          {
            "name": "ethereum_address_eip55",
            "value": 999.7,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute (SHA256 shared secret)",
            "value": 44488.7,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute_raw (x-only shared)",
            "value": 43013.2,
            "unit": "ns"
          },
          {
            "name": "taproot_output_key (BIP-341 key path)",
            "value": 17723.3,
            "unit": "ns"
          },
          {
            "name": "taproot_tweak_privkey (BIP-341)",
            "value": 24581,
            "unit": "ns"
          },
          {
            "name": "bip32_master_key (64B seed)",
            "value": 1352,
            "unit": "ns"
          },
          {
            "name": "bip32_coin_derive_key (BTC m/84'/0'/0'/0/0)",
            "value": 169142.7,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (BTC end-to-end)",
            "value": 194288.8,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (ETH end-to-end)",
            "value": 200774.1,
            "unit": "ns"
          },
          {
            "name": "silent_payment_create_output",
            "value": 53326.9,
            "unit": "ns"
          },
          {
            "name": "silent_payment_scan (single output set)",
            "value": 74581.5,
            "unit": "ns"
          },
          {
            "name": "field_inv_var",
            "value": 1132.3,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse (CT)",
            "value": 1843.3,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse_var",
            "value": 1162.5,
            "unit": "ns"
          },
          {
            "name": "point_dbl (gej_double_var)",
            "value": 147.4,
            "unit": "ns"
          },
          {
            "name": "point_add (gej_add_ge_var)",
            "value": 249.1,
            "unit": "ns"
          },
          {
            "name": "ecmult (a*P + b*G, Strauss)",
            "value": 37190.8,
            "unit": "ns"
          },
          {
            "name": "ecmult_gen (k*G, comb)",
            "value": 18413.6,
            "unit": "ns"
          },
          {
            "name": "generator_mul (ec_pubkey_create)",
            "value": 20366.4,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_P (k*P, tweak_mul)",
            "value": 34582.9,
            "unit": "ns"
          },
          {
            "name": "point_add (pubkey_combine)",
            "value": 2546.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign (BIP-340)",
            "value": 21870.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (BIP-340)",
            "value": 39995.4,
            "unit": "ns"
          },
          {
            "name": "generator_mul (EC_POINT_mul k*G)",
            "value": 389750,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign (ECDSA_do_sign)",
            "value": 414826.6,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify (ECDSA_do_verify)",
            "value": 373881.3,
            "unit": "ns"
          },
          {
            "name": "Pedersen commit",
            "value": 65375.6,
            "unit": "ns"
          },
          {
            "name": "Knowledge prove (sigma)",
            "value": 46722.2,
            "unit": "ns"
          },
          {
            "name": "Knowledge verify",
            "value": 41466.7,
            "unit": "ns"
          },
          {
            "name": "DLEQ prove",
            "value": 90355.5,
            "unit": "ns"
          },
          {
            "name": "DLEQ verify",
            "value": 108557.5,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_prove (64b)",
            "value": 24428512.7,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_verify (64b)",
            "value": 2946640.7,
            "unit": "ns"
          },
          {
            "name": "Schnorr adaptor sign",
            "value": 36559.2,
            "unit": "ns"
          },
          {
            "name": "Schnorr adaptor verify",
            "value": 51237.3,
            "unit": "ns"
          },
          {
            "name": "Schnorr adaptor adapt",
            "value": 22801.2,
            "unit": "ns"
          },
          {
            "name": "ECDSA adaptor sign",
            "value": 65911.9,
            "unit": "ns"
          },
          {
            "name": "ECDSA adaptor verify",
            "value": 64818.7,
            "unit": "ns"
          },
          {
            "name": "keygen_begin (DKG round 1)",
            "value": 44894.8,
            "unit": "ns"
          },
          {
            "name": "nonce_gen",
            "value": 44544.7,
            "unit": "ns"
          },
          {
            "name": "partial_sign",
            "value": 86531.7,
            "unit": "ns"
          },
          {
            "name": "partial_verify",
            "value": 158889.7,
            "unit": "ns"
          },
          {
            "name": "aggregate → Schnorr sig",
            "value": 81493,
            "unit": "ns"
          },
          {
            "name": "key_agg (BIP-327)",
            "value": 71734.1,
            "unit": "ns"
          },
          {
            "name": "sig_agg → Schnorr sig",
            "value": 1181.5,
            "unit": "ns"
          },
          {
            "name": "ECIES encrypt (256B payload)",
            "value": 101125.5,
            "unit": "ns"
          },
          {
            "name": "ECIES decrypt (256B payload)",
            "value": 83252,
            "unit": "ns"
          },
          {
            "name": "Bitcoin message sign",
            "value": 31458.2,
            "unit": "ns"
          },
          {
            "name": "Bitcoin message verify",
            "value": 36252.1,
            "unit": "ns"
          },
          {
            "name": "SHA-256 (32B input)",
            "value": 242.3,
            "unit": "ns"
          },
          {
            "name": "SHA-512 (32B input)",
            "value": 332.7,
            "unit": "ns"
          },
          {
            "name": "Multi-scalar mul (4 points)",
            "value": 91330.6,
            "unit": "ns"
          },
          {
            "name": "Multi-scalar mul (64 points)",
            "value": 1140373.3,
            "unit": "ns"
          },
          {
            "name": "bip39_generate (12 words)",
            "value": 17499.8,
            "unit": "ns"
          },
          {
            "name": "bip39_generate (24 words)",
            "value": 17554.5,
            "unit": "ns"
          },
          {
            "name": "bip39_validate (12 words)",
            "value": 1409.9,
            "unit": "ns"
          },
          {
            "name": "bip39_to_seed (PBKDF2, 12 words)",
            "value": 2661384.2,
            "unit": "ns"
          },
          {
            "name": "BIP-143 sighash (1-in/1-out)",
            "value": 1071.5,
            "unit": "ns"
          },
          {
            "name": "BIP-144 compute_wtxid",
            "value": 1346.4,
            "unit": "ns"
          },
          {
            "name": "BIP-144 witness_commitment",
            "value": 775.8,
            "unit": "ns"
          },
          {
            "name": "BIP-144 tx_weight",
            "value": 213.9,
            "unit": "ns"
          },
          {
            "name": "BIP-341 keypath_sighash",
            "value": 2439.7,
            "unit": "ns"
          },
          {
            "name": "BIP-342 tapscript_sighash",
            "value": 2721.6,
            "unit": "ns"
          },
          {
            "name": "ElligatorSwift create",
            "value": 83413.3,
            "unit": "ns"
          },
          {
            "name": "ElligatorSwift XDH (ECDH)",
            "value": 63066,
            "unit": "ns"
          },
          {
            "name": "HKDF-SHA256 extract",
            "value": 1023.7,
            "unit": "ns"
          },
          {
            "name": "HKDF-SHA256 expand",
            "value": 997.2,
            "unit": "ns"
          },
          {
            "name": "AEAD encrypt (256B)",
            "value": 743.7,
            "unit": "ns"
          },
          {
            "name": "AEAD decrypt (256B)",
            "value": 754,
            "unit": "ns"
          },
          {
            "name": "Session handshake (full)",
            "value": 316712.7,
            "unit": "ns"
          },
          {
            "name": "Session encrypt (256B)",
            "value": 901.5,
            "unit": "ns"
          },
          {
            "name": "Session decrypt (256B)",
            "value": 1816.7,
            "unit": "ns"
          },
          {
            "name": "Session encrypt (1KB)",
            "value": 2699.4,
            "unit": "ns"
          },
          {
            "name": "Session roundtrip (256B)",
            "value": 1817.3,
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