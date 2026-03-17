window.BENCHMARK_DATA = {
  "lastUpdate": 1773718931757,
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
      }
    ]
  }
}